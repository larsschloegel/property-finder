package de.propertyfinder.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "germanyplz")
public class PlzGermany {

    @Id
    private String osmId;
    private String ags;
    private String ort;
    private String plz;
    private String landkreis;
    private String bundesland;

}
