package de.propertyfinder.backend.api.octoparse;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.mock;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class OctoparseApiServiceTest {

    private final AccessTokenUtil accessTokenUtil = mock(AccessTokenUtil.class);
    private final ApiConnectionUtil apiConnectionUtil = mock(ApiConnectionUtil.class);

    @Test
    @DisplayName("returns the correct Value from Json Key")
    void getValueFromJsonTest() {
        //Given
        String json = "{\"data\":\"example\",\"error\":\"success\",\"number\":37}";
        String key = "data";
        //When
        OctoparseApiService octoparseApiService = new OctoparseApiService(accessTokenUtil, apiConnectionUtil);
        String actual = octoparseApiService.getValueFromJson(json, key);
        //Then
        assertThat(actual, is("example"));
    }

    @Test
    @DisplayName("returns Exception with false key")
    void getValueFromJsonTestWithWrongKey() {
        //Given
        String json = "{\"data\":\"example\",\"error\":\"success\",\"number\":37}";
        String key = "datA";
        //When
        OctoparseApiService octoparseApiService = new OctoparseApiService(accessTokenUtil, apiConnectionUtil);
        try {
            String actual = octoparseApiService.getValueFromJson(json, key);
            fail();
        } catch (NullPointerException e) {
            //Then
            assertEquals(e.getMessage(), "Key "+  "\"" + key + "\"" + " not found in JSON");
        }
    }

}