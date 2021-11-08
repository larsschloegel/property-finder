package de.propertyfinder.backend.api.octoparse;

import com.alibaba.fastjson.JSONArray;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

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

    public String getAllProperties() {

        String tokenUrl = "https://dataapi.octoparse.com/token";
        String getToken = accessTokenUtil.getToken(userName, passWord, tokenUrl);

        String accessToken = getValueFromJSON(getToken, "access_token");
        log.info("AccessToken: " + accessToken);

        return getAllDataFromOctoparse(accessToken);
    }

    public String getValueFromJSON(String Json, String key) {
        JSONObject jsonString = (JSONObject) JSON.parse(Json);
        String valueFromJson = jsonString.getString(key);
        return valueFromJson;
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

            String dataJson = getValueFromJSON(getDataByOffsetResult,"data");
            offset = getValueFromJSON(dataJson, "offset");
            restTotal = Integer.parseInt(getValueFromJSON(dataJson, "restTotal"));
            log.info("restTotal: " + restTotal);

            dataJson = getValueFromJSON(dataJson, "dataList");
            JSONArray dataJsonToArray = (JSONArray) JSON.parse(dataJson);
            finalArray.addAll(dataJsonToArray);

        } while (restTotal != 0);
        return finalArray.toString();
    }
}
