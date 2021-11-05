package de.propertyfinder.backend.api.octoparse;
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
        //Access token
        String tokenUrl = "https://dataapi.octoparse.com/token";
        String getToken = accessTokenUtil.getToken(userName, passWord, tokenUrl);

        JSONObject jsonString = (JSONObject) JSON.parse(getToken);
        String accessToken = jsonString.getString("access_token");

        //Get AllData
        String offset = "0";
        String size = "1000";
        int restTotal = 1;
        String precedAllDataUrl = "https://dataapi.octoparse.com/api/alldata/GetDataOfTaskByOffset";
        String dataStringOfJSON= "";
        String allData="";
        JSONObject finalObject = new JSONObject();
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

            //finalObject.put("data", dataJson);
            //finalObject.putAll(getJSONDataByOffsetResult);
            //allData = JSONObject.toJSONString(dataJson);

        } while (restTotal != 0);
        return dataStringOfJSON;
    }
}
