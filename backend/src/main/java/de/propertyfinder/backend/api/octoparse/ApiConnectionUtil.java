package de.propertyfinder.backend.api.octoparse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;


@Slf4j
@Service
public class ApiConnectionUtil {

    public static String sendGet(String url, String param, String token) {
        token=String.format("bearer %s", token);
        String result = "";
        BufferedReader in = null;
        try {
            String urlNameString = url + "?" + param;
            //String bearerAccessToken="bearer "+token;
            URL realUrl = new URL(urlNameString);
            // The connection between the opening and the URL
            URLConnection connection = realUrl.openConnection();
            // Set the request of the general properties
            connection.setRequestProperty("accept", "application/json");
            connection.setRequestProperty("Authorization", token);
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            // To establish the actual connection
            connection.connect();
            // Define BufferedReader input stream to read the response of the URL
            in = new BufferedReader(new InputStreamReader(connection.getInputStream(),"UTF-8"));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            log.error("Send a GET request an exception!" + e);
            e.printStackTrace();
        }
        // To use a finally block to close the input stream
        finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return result;
    }
}
