package de.propertyfinder.backend.api.octoparse;

import com.alibaba.fastjson.JSONArray;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class OctoparseApiService {
    @Value("${de.propertyfinder.backend.octoparse.userName}")
    private String userName;

    @Value("${de.propertyfinder.backend.octoparse.passWord}")
    private String passWord;

    @Value("${de.propertyfinder.backend.octoparse.taskId}")
    private String taskId;

    private final AccessTokenUtil accessTokenUtil;
    private final ApiConnectionUtil apiConnectionUtil;
    private final String BASEURL = "https://dataapi.octoparse.com/";

    public List<OctoparseApiDto> getAllProperties() throws JsonProcessingException {

        String tokenUrl = BASEURL + "token";
        String getToken = accessTokenUtil.getToken(userName, passWord, tokenUrl);
        String accessToken = getValueFromJson(getToken, "access_token");
        log.info("AccessToken: " + accessToken);

        String allDataFromOctoparseApi = getAllDataFromOctoparse(accessToken);
        List<OctoparseApiDto> octoparseApiDtoList = mapToOctoparseApiDto(allDataFromOctoparseApi);
        List<OctoparseApiDto> octoparseApiDtoListFilterd = filterOctparseApiData(octoparseApiDtoList);

        return octoparseApiDtoListFilterd;
    }

    public List<OctoparseApiDto> filterOctparseApiData(List<OctoparseApiDto> octoparseApiDtoList) {
                return octoparseApiDtoList.stream()
                .filter(propertyObject -> !propertyObject.getPurchasePrice().isEmpty() && !propertyObject.getSize().isEmpty())
                .map(this::cleanPropertyObject)
                .collect(Collectors.toList());
    }

    public String getValueFromJson(String JsonInput, String key) {
        JSONObject jsonString = (JSONObject) JSON.parse(JsonInput);
        String value = jsonString.getString(key);
        if(value == null){
            throw new NullPointerException("Key \"" + key + "\" not found in JSON");
        }
        return value;
    }

    public String getAllDataFromOctoparse(String accessToken) {
        //Api need more request to get all data, second request should use the offset from the first request
        String offset = "0";
        String size = "1000";
        int restTotal = 1;
        String allDataUrlOctoparse = BASEURL+ "api/alldata/GetDataOfTaskByOffset";
        JSONArray finalArray = new JSONArray();
        do {
            //send request
            String apiParam = "taskid=" + taskId + "&offset=" + offset + "&size=" + size;
            String getDataByOffsetResult = apiConnectionUtil.sendGet(allDataUrlOctoparse, apiParam, accessToken);

            String dataJson = getValueFromJson(getDataByOffsetResult,"data");
            offset = getValueFromJson(dataJson, "offset");
            restTotal = Integer.parseInt(getValueFromJson(dataJson, "restTotal"));
            log.info("restTotal: " + restTotal);

            dataJson = getValueFromJson(dataJson, "dataList");
            JSONArray dataJsonToArray = (JSONArray) JSON.parse(dataJson);
            finalArray.addAll(dataJsonToArray);
        } while (restTotal != 0);
        //set flag for taskID
        return finalArray.toString();
    }

    public List<OctoparseApiDto> mapToOctoparseApiDto(String allDataFromOctoparseApi) throws JsonProcessingException {
        final ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        List<OctoparseApiDto> listOfPropertyObjects = objectMapper.readValue(allDataFromOctoparseApi, new TypeReference<List<OctoparseApiDto>>(){});
        return listOfPropertyObjects;
    }

    public OctoparseApiDto cleanPropertyObject (OctoparseApiDto propertyObject){
        String removeSpacesAndTabs = "[/\\sg]";
        String removeSpacesTabsAndUnit = "[/\\sgm²]";
        propertyObject.setSubtyp(propertyObject.getSubtyp().replaceAll(removeSpacesAndTabs,""));
        propertyObject.setPurchasePrice(propertyObject.getPurchasePrice().replaceAll("[/\\sg€.]",""));
        propertyObject.setSize(propertyObject.getSize().replaceAll(removeSpacesTabsAndUnit,"").replaceAll("[,]","."));
        propertyObject.setRoomCount(propertyObject.getRoomCount().replaceAll(removeSpacesAndTabs,""));
        propertyObject.setId(propertyObject.getId().replaceAll(removeSpacesAndTabs,"").replaceFirst("Objekt-Nr.:WHPO\\|Scout-ID:",""));
        propertyObject.setUsableArea(propertyObject.getUsableArea().replaceAll(removeSpacesTabsAndUnit,""));
        propertyObject.setLandArea(propertyObject.getLandArea().replaceAll(removeSpacesTabsAndUnit,""));
        propertyObject.setPlz(propertyObject.getAddress().substring(0,5));
        propertyObject.setCity(propertyObject.getAddress().replaceAll("(,).*", "").replaceFirst(".*? ",""));
        return propertyObject;
    }
}
