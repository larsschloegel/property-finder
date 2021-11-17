package de.propertyfinder.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "additionalPurchaseCost")
public class AdditionalPurchaseCosts {

    private String state;
    private double notaryFeeInPercent;
    private double realEstateTransferTaxInPercent;
    private double realEstateAgentFeeInPercent;
}
