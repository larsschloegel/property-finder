package de.propertyfinder.backend.api.octoparse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OctoparseApiDto {

    @JsonProperty("ansprechpartnerimpressum")
    private String imprintCompany;
    @JsonProperty("address")
    private String address;
    @JsonProperty("ansprechpartner")
    private String contactPerson;
    @JsonProperty("title")
    private String propertyName;
    @JsonProperty("Image1")
    private String propertyPictureUrl;
    @JsonProperty("typ")
    private String propertyTyp;
    @JsonProperty("kaufpreis")
    private String purchasePrice;
    @JsonProperty("wohnflaeche")
    private String size;
    @JsonProperty("anzahlZimmer")
    private String roomCount;
    @JsonProperty("ID")
    private String id;
    @JsonProperty("slickslide_URL")
    private String exposeUrl;
    @JsonProperty("nutzflaeche")
    private String usableArea;
    @JsonProperty("grundstueck")
    private String landArea;

}
