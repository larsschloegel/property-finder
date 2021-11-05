package de.propertyfinder.backend.api.octoparse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import static de.propertyfinder.backend.api.octoparse.AllDataUtil.sendGet;
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

    public OctoparseApiService(AccessTokenUtil accessTokenUtil) {
        this.accessTokenUtil = accessTokenUtil;
    }

    public String getAllProperties() {
        //Access token
        String tokenUrl = "http://dataapi.octoparse.com/token";
        String getToken = accessTokenUtil.GetToken(userName, passWord, tokenUrl);

        JSONObject jsonString = (JSONObject) JSON.parse(getToken);
        String accessToken = jsonString.getString("access_token");

        //Get AllData
        String offset = "0";
        String size = "1000";
        int restTotal = 1;
        String precedAllDataUrl = "http://dataapi.octoparse.com/api/alldata/GetDataOfTaskByOffset";
        do {
            //send request
            String apiParam = "taskid=" + taskId + "&offset=" + offset + "&size=" + size;
            String getDataByOffsetResult = sendGet(precedAllDataUrl, apiParam, accessToken);
            //Get Data from JSON
            JSONObject getJSONDataByOffsetResult = (JSONObject) JSON.parse(getDataByOffsetResult);
            String dataStringOfJSON = getJSONDataByOffsetResult.getString("data");
            JSONObject dataJson = (JSONObject) JSON.parse(dataStringOfJSON);
            //get new offset of reqeust
            offset = dataJson.getString("offset");
            //get restTotal for end of loop
            restTotal = dataJson.getInteger("restTotal");
        } while (restTotal != 0);
        return "String";
    }

}
