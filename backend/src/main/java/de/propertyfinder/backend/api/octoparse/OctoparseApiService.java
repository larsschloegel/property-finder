package de.propertyfinder.backend.api.octoparse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Service
public class OctoparseApiService {
    @Value("${de.propertyfinder.backend.octoparse.userName}")
    private String userName;

    @Value("${de.propertyfinder.backend.octoparse.passWord}")
    private String passWord;

    private final AccessTokenUtil accessTokenUtil;

    public OctoparseApiService(AccessTokenUtil accessTokenUtil) {
        this.accessTokenUtil = accessTokenUtil;
    }

    public String getAllProperties() {
        //Access token
        String tokenUrl = "http://dataapi.octoparse.com/token";
        String getToken = accessTokenUtil.GetToken(userName, passWord, tokenUrl);

        //processing access token
        String tokenRegex = ":\"(.*)\",\"t";
        Pattern p = Pattern.compile(tokenRegex);
        Matcher m = p.matcher(getToken);
        String token = "";
        while (m.find()) {
            token = "bearer " + m.group(1);
        }
        return  token;
        //List All Task in a Group

        //Get Data

        //Get non-exported Data
    }




}
