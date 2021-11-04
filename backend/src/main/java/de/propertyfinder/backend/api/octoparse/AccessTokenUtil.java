package de.propertyfinder.backend.api.octoparse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@Slf4j
@Service
public class AccessTokenUtil {

    String GetToken(String userName, String passWord, String tokenUrl) {
        String token = null;
        if (null != userName && null != passWord && null != tokenUrl) {
            String postdata = String.format(
                    "username=%s&password=%s&grant_type=password", userName,
                    passWord);
            String responseText = sendPost(tokenUrl, postdata);
            if (responseText.contains("access_token")) {
                token = responseText;
            }
        }
        return token;

    }

    private String sendPost(String url, String param) {
        PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try {
            URL realUrl = new URL(url);
            // The connection between the opening and the URL
            HttpURLConnection conn = (HttpURLConnection) realUrl
                    .openConnection();
            // Set the request of the general properties
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("Content-Type",
                    "application/x-www-form-urlencoded");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);// Use the URL connection for output
            conn.setDoInput(true);//Use the URL connection for input

            byte[] requestStringBytes = param.getBytes("utf-8");

            // To build the output stream and write data
            OutputStream outputStream = conn.getOutputStream();
            outputStream.write(requestStringBytes);
            outputStream.close();
            // Get the response status
            int responseCode = conn.getResponseCode();
            if (HttpURLConnection.HTTP_OK == responseCode) {// The connection is successful
                // When the correct response to process the data
                StringBuilder sb = new StringBuilder();
                String readLine;
                BufferedReader responseReader;
                //Process the response flow, must be consistent with the server response stream output coding
                responseReader = new BufferedReader(new InputStreamReader(
                        conn.getInputStream(), "utf-8"));
                while ((readLine = responseReader.readLine()) != null) {
                    sb.append(readLine).append("\n");
                }
                responseReader.close();
                result = sb.toString();

            }
        } catch (Exception e) {
            log.error("Send a POST request is abnormal!" + e);
            e.printStackTrace();
        }

        // Use a finally block to close the output stream and the input stream
        finally {
            try {
                if (out != null) {
                    out.close();
                }
                if (in != null) {
                    in.close();
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
        return result;
    }

}
