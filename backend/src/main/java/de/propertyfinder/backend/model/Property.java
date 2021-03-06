package de.propertyfinder.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "property")
public class Property {

    @Id
    private String id;
    private String name;

    private String source;
    private String exposeUrl;
    private String contactPerson;
    private String typ;
    private String subtyp;
    private String imageUrl;

    //address
    private String street;
    private String streetNumber;
    private String plz;
    private String city;
    private String state;

    //purchase price
    private double purchasePriceInEuro;
    private double realEstateAgentFeeInEuro;
    private double realEstateAgentFeeInPercent;
    private double realEstateTransferTaxInEuro;
    private double realEstateTransferTaxInPercent;
    private double notaryFeeInEuro;
    private double notaryFeeInPercent;
    private double sumAdditionalPurchaseCostInEuro;
    private double overallPurchasePriceInEuro;

    //funding calculation
    private double bankLoanInEuro;
    private double initialRepaymentInPercent;
    private double interestRateInPercent;
    private double equityCapitalInEuro;
    private double equityCapitalInPercent;
    private double creditRateInEuroPerYear;
    private double creditRateInEuroPerMonth;

    //market data
    private double sizeInSquareMeter;
    private double netRentInEuroPerYear;
    private double netRentInEuroPerMonth;
    private double maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear;
    private double vacancyRateInPercent;

    //net return calculation
    private double vacancyRateInEuroPerYear;
    private double maintenanceCostAndImprovementInEuroPerYear;
    private double managementFeeInEuroPerYear;
    private double pricePerSizeInclAdditionalCostInEuroPerYear;
    private double netRentPerSizeInEuroPerYear;
    private double netRentPerSizeInEuroPerMonth;
    private double adjustedNetRentInEuroPerYear;
    private double adjustedNetReturnInPercent;

    //cash flow calulation
    private double operatingCostPerYear;
    private double operatingCostPerMonth;
    private double cfbtInEuroPerYear;
    private double cfbtInEuroPerMonth;

}
