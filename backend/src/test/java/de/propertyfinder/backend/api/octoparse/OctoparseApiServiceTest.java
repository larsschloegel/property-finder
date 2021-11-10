package de.propertyfinder.backend.api.octoparse;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

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

    @Test
    @DisplayName("returns List of ApiDto from String")
    void mapToOctoparseApiDtoTest() throws JsonProcessingException {
        //Given
         String json = "[{\"Title\":\"Title\",\"Image\":\"Image\",\"slickslide_URL\":\"slickslide_URL\",\"Image1\":\"Image1\",\"Image2\":\"Image2\",\"Image3\":\"Image3\",\"Image4\":\"Image4\",\"ID\":\"ID\",\"title\":\"title\",\"address\":\"address\",\"kaufpreis\":\"kaufpreis\",\"anzahlZimmer\":\"anzahlZimmer\",\"wohnflaeche\":\"wohnflaeche\",\"grundstueck\":\"grundstueck\",\"typ\":\"typ\",\"nutzflaeche\":\"nutzflaeche\",\"baujahr\":\"baujahr\",\"ansprechpartner\":\"ansprechpartner\",\"ansprechpartnerimpressum\":\"ansprechpartnerimpressum\"}]";
        //When
        OctoparseApiService octoparseApiService = new OctoparseApiService(accessTokenUtil, apiConnectionUtil);
        List<OctoparseApiDto> actual = octoparseApiService.mapToOctoparseApiDto(json);
        //Then
        List<OctoparseApiDto> expected = List.of(
              new OctoparseApiDto("ansprechpartnerimpressum", "address", "ansprechpartner", "title", "Image1","typ", "kaufpreis", "wohnflaeche", "anzahlZimmer",
                      "ID", "slickslide_URL", "nutzflaeche", "grundstueck")
        );
        assertThat(actual, is(expected));
    }

}