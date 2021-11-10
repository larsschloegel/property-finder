package de.propertyfinder.backend.api.octoparse;

import com.alibaba.fastjson.JSONArray;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Slf4j
@Service
public class OctoparseApiService {
    @Value("${de.propertyfinder.backend.octoparse.userName}")
    private String userName;

    @Value("${de.propertyfinder.backend.octoparse.passWord}")
    private String passWord;

    @Value("${de.propertyfinder.backend.octoparse.taskId}")
    private String taskId;

    private final AccessTokenUtil accessTokenUtil;
    private final ApiConnectionUtil apiConnectionUtil;

    public OctoparseApiService(AccessTokenUtil accessTokenUtil, ApiConnectionUtil apiConnectionUtil) {
        this.accessTokenUtil = accessTokenUtil;
        this.apiConnectionUtil = apiConnectionUtil;
    }

    public List<OctoparseApiDto> getAllProperties() throws JsonProcessingException {

        String tokenUrl = "https://dataapi.octoparse.com/token";
        String getToken = accessTokenUtil.getToken(userName, passWord, tokenUrl);

        String accessToken = getValueFromJson(getToken, "access_token");
        log.info("AccessToken: " + accessToken);

        String allDataFromOctoparseApi = getAllDataFromOctoparse(accessToken);
        return mapToOctoparseApiDto(allDataFromOctoparseApi);
    }

    public String getValueFromJson(String JsonInput, String key) {
        JSONObject jsonString = (JSONObject) JSON.parse(JsonInput);
        String value = jsonString.getString(key);
        if(value == null){
            throw new NullPointerException("Key "+  "\"" + key + "\"" + " not found in JSON");
        }
        return value;
    }

    public String getAllDataFromOctoparse(String accessToken) {
        //Api need more request to get all data, second request should use the offset from the first request
        String offset = "0";
        String size = "1000";
        int restTotal = 1;
        String allDataUrlOctoparse = "https://dataapi.octoparse.com/api/alldata/GetDataOfTaskByOffset";
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
        return finalArray.toString();
    }

    public List<OctoparseApiDto> mapToOctoparseApiDto(String allDataFromOctoparseApi) throws JsonProcessingException {
        final ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        List<OctoparseApiDto> listOfPropertyObjects = objectMapper.readValue(allDataFromOctoparseApi, new TypeReference<List<OctoparseApiDto>>(){});
        return listOfPropertyObjects;
    }
}