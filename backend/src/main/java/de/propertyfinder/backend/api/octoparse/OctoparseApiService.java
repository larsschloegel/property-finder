package de.propertyfinder.backend.api.octoparse;

import com.alibaba.fastjson.JSONArray;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import javax.json.Json;
import javax.json.JsonObject;


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

        String allOctoparseData = getAllDataFromOctoparse(accessToken);
        return allOctoparseData;
    }

    public String getValueFromJSON(String Json, String key) {
        JSONObject jsonString = (JSONObject) JSON.parse(Json);
        String valueFromJson = jsonString.getString(key);
        return valueFromJson;
    }

    public String getAllDataFromOctoparse(String accessToken) {
        //Get AllData
        String offset = "0";
        String size = "1000";
        int restTotal = 1;
        String precedAllDataUrl = "https://dataapi.octoparse.com/api/alldata/GetDataOfTaskByOffset";
        String dataStringOfJSON = "";
        String dataListStringOfJSON = "";
        String allData = "";
        JSONArray finalArray = new JSONArray();
        do {
            //send request
            String apiParam = "taskid=" + taskId + "&offset=" + offset + "&size=" + size;
            String getDataByOffsetResult = apiConnectionUtil.sendGet(precedAllDataUrl, apiParam, accessToken);
            //Get Data from JSON ->> Auslagern nicht vergessen
            JSONObject getJSONDataByOffsetResult = (JSONObject) JSON.parse(getDataByOffsetResult);
            dataStringOfJSON = getJSONDataByOffsetResult.getString("data");
            JSONObject dataJson = (JSONObject) JSON.parse(dataStringOfJSON);
            //get new offset of reqeust
            offset = dataJson.getString("offset");
            //get restTotal for end of loop
            restTotal = dataJson.getInteger("restTotal");
            log.info("restTotal: " + String.valueOf(restTotal));
            dataListStringOfJSON = dataJson.getString("dataList");
            //log.info("dataList" + dataListStringOfJSON);
            JSONArray dataListJson = (JSONArray) JSON.parse(dataListStringOfJSON);
            finalArray.addAll(dataListJson);

        } while (restTotal != 0);
        return finalArray.toString();
    }
}
