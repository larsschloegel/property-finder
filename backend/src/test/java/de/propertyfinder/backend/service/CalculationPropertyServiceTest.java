package de.propertyfinder.backend.service;

import de.propertyfinder.backend.model.AdditionalPurchaseCosts;
import de.propertyfinder.backend.model.PlzGermany;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.repo.AdditionalPurchaseCostRepo;
import de.propertyfinder.backend.repo.PlzRepo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class CalculationPropertyServiceTest {

    private final PlzRepo plzRepo = mock(PlzRepo.class);
    private final AdditionalPurchaseCostRepo additionalPurchaseCostRepo = mock(AdditionalPurchaseCostRepo.class);
    private final CalculationPropertyService calculationPropertyService = new CalculationPropertyService(plzRepo, additionalPurchaseCostRepo);

    @Test
    @DisplayName("set state depending on plz of property")
    void setStateTest() {
        //Given
        Property property = Property.builder()
                .plz("78267")
                .state("")
                .build();

        PlzGermany plzGermany = PlzGermany.builder()
                .bundesland("Baden-Württemberg")
                .build();

        //When
        when(plzRepo.findByPlz(property.getPlz())).thenReturn(plzGermany);
        Property actual = calculationPropertyService.setState(property);

        //Then
        Property expected = Property.builder()
                .state("Baden-Württemberg")
                .plz("78267")
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set real estate Agent Fee")
    void setRealEstateAgentFeeTest() {
        //Given
        AdditionalPurchaseCosts additionalPurchaseCosts = AdditionalPurchaseCosts.builder()
                .state("Baden-Württemberg")
                .realEstateAgentFeeInPercent(3.57)
                .build();
        Property property = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .realEstateAgentFeeInPercent(0.0)
                .realEstateAgentFeeInEuro(0.0)
                .build();
        //When
        when(additionalPurchaseCostRepo.findByState("Baden-Württemberg")).thenReturn(additionalPurchaseCosts);
        Property actual = calculationPropertyService.setRealEstateAgentFee(property);
        //Then
        Property expected = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .realEstateAgentFeeInPercent(3.57)
                .realEstateAgentFeeInEuro(35.7)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set real estate Transfer Tax")
    void setRealEstateTransferTaxTest() {
        //Given
        AdditionalPurchaseCosts additionalPurchaseCosts = AdditionalPurchaseCosts.builder()
                .state("Baden-Württemberg")
                .realEstateTransferTaxInPercent(5.0)
                .build();
        Property property = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .realEstateTransferTaxInPercent(0.0)
                .realEstateTransferTaxInEuro(0.0)
                .build();
        //When
        when(additionalPurchaseCostRepo.findByState("Baden-Württemberg")).thenReturn(additionalPurchaseCosts);
        Property actual = calculationPropertyService.setRealEstateTransferTax(property);
        //Then
        Property expected = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .realEstateTransferTaxInPercent(5.0)
                .realEstateTransferTaxInEuro(50.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set notary fee")
    void setNotaryFeeTest() {
        //Given
        AdditionalPurchaseCosts additionalPurchaseCosts = AdditionalPurchaseCosts.builder()
                .state("Baden-Württemberg")
                .notaryFeeInPercent(2.0)
                .build();
        Property property = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .notaryFeeInPercent(0.0)
                .notaryFeeInEuro(0.0)
                .build();
        //When
        when(additionalPurchaseCostRepo.findByState("Baden-Württemberg")).thenReturn(additionalPurchaseCosts);
        Property actual = calculationPropertyService.setNotaryFee(property);
        //Then
        Property expected = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .notaryFeeInPercent(2.0)
                .notaryFeeInEuro(20.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set sum additional purchase cost")
    void setSumAdditionalPurchaseCostTest() {
        //Given
        Property property = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .realEstateTransferTaxInEuro(50.0)
                .realEstateAgentFeeInEuro(35.7)
                .notaryFeeInEuro(20.0)
                .build();
        //When
        Property actual = calculationPropertyService.setSumAdditionalPurchaseCost(property);
        //Then
        Property expected = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .sumAdditionalPurchaseCostInEuro(105.7)
                .realEstateTransferTaxInEuro(50.0)
                .realEstateAgentFeeInEuro(35.7)
                .notaryFeeInEuro(20.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set overall purchase price")
    void setOverallPurchasePriceTest() {
        //Given
        Property property = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .sumAdditionalPurchaseCostInEuro(105.7)
                .build();
        //When
        Property actual = calculationPropertyService.setOverallPurchasePrice(property);
        //Then
        Property expected = Property.builder()
                .plz("78267")
                .state("Baden-Württemberg")
                .purchasePriceInEuro(1000.0)
                .sumAdditionalPurchaseCostInEuro(105.7)
                .overallPurchasePriceInEuro(1105.7)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set bank loan")
    void setBankLoanTest() {
        //Given
        Property property = Property.builder()
                .bankLoanInEuro(0.0)
                .overallPurchasePriceInEuro(1000.0)
                .build();
        //When
        Property actual = calculationPropertyService.setBankLoan(property);
        //Then
        Property expected = Property.builder()
                .bankLoanInEuro(1000.0)
                .overallPurchasePriceInEuro(1000.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set initial repayment")
    void setInitialRepaymentTest() {
        //Given
        Property property = Property.builder()
                .initialRepaymentInPercent(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setInitialRepayment(property);
        //Then
        Property expected = Property.builder()
                .initialRepaymentInPercent(1.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set interest rate")
    void setInterestRateTest() {
        //Given
        Property property = Property.builder()
                .interestRateInPercent(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setInterestRate(property);
        //Then
        Property expected = Property.builder()
                .interestRateInPercent(1.5)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set credit rate per year")
    void setCreditRatePerYearTest() {
        //Given
        Property property = Property.builder()
                .initialRepaymentInPercent(1.0)
                .interestRateInPercent(1.5)
                .bankLoanInEuro(1000.0)
                .creditRateInEuroPerYear(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setCreditRatePerYear(property);
        //Then
        Property expected = Property.builder()
                .initialRepaymentInPercent(1.0)
                .interestRateInPercent(1.5)
                .bankLoanInEuro(1000.0)
                .creditRateInEuroPerYear(2500.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set credit rate per month")
    void setCreditRatePerMonthTest() {
        //Given
        Property property = Property.builder()
                .creditRateInEuroPerYear(2500.0)
                .creditRateInEuroPerMonth(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setCreditRatePerMonth(property);
        //Then
        Property expected = Property.builder()
                .creditRateInEuroPerYear(2500.0)
                .creditRateInEuroPerMonth(208.33333333333334)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set equity capital")
    void setEquityCapitalTest() {
        //Given
        Property property = Property.builder()
                .equityCapitalInEuro(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setEquityCapital(property);
        //Then
        Property expected = Property.builder()
                .equityCapitalInEuro(0.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set net rent per month")
    void setNetRentPerMonthTest() {
        //Given
        Property property = Property.builder()
                .sizeInSquareMeter(100.0)
                .netRentPerSizeInEuroPerMonth(5.00)
                .netRentInEuroPerMonth(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setNetRentPerMonth(property);
        //Then
        Property expected = Property.builder()
                .sizeInSquareMeter(100.0)
                .netRentPerSizeInEuroPerMonth(5.00)
                .netRentInEuroPerMonth(500)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set net rent per year")
    void setNetRentPerYearTest() {
        //Given
        Property property = Property.builder()
                .netRentInEuroPerMonth(500)
                .netRentInEuroPerYear(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setNetRentPerYear(property);
        //Then
        Property expected = Property.builder()
                .netRentInEuroPerMonth(500)
                .netRentInEuroPerYear(6000.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set maintenance cost and improvement factor")
    void setMaintenanceCostAndImprovementFactorTest() {
        //Given
        Property property = Property.builder()
                .maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setMaintenanceCostAndImprovementFactor(property);
        //Then
        Property expected = Property.builder()
                .maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear(25.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set management fee")
    void setManagementFeeTest() {
        //Given
        Property property = Property.builder()
                .managementFeeInEuroPerYear(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setManagementFee(property);
        //Then
        Property expected = Property.builder()
                .managementFeeInEuroPerYear(300.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set vacancy rate in percent")
    void setVacancyRateInPercentTest() {
        //Given
        Property property = Property.builder()
                .vacancyRateInPercent(0.0)
                .build();
        //When
        Property actual = calculationPropertyService.setVacancyRateInPercent(property);
        //Then
        Property expected = Property.builder()
                .vacancyRateInPercent(5.0)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set price per size incl. additional cost")
    void setPricePerSizeTest() {
        //Given
        Property property = Property.builder()
                .overallPurchasePriceInEuro(1000.0)
                .sizeInSquareMeter(20)
                .pricePerSizeInclAdditionalCostInEuroPerYear(0)
                .build();
        //When
        Property actual = calculationPropertyService.setPricePerSize(property);
        //Then
        Property expected = Property.builder()
                .overallPurchasePriceInEuro(1000.0)
                .sizeInSquareMeter(20)
                .pricePerSizeInclAdditionalCostInEuroPerYear(50)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set maintenance cost and improvement")
    void setMaintenanceCostAndImprovementPerYearTest() {
        //Given
        Property property = Property.builder()
                .maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear(25)
                .sizeInSquareMeter(30)
                .maintenanceCostAndImprovementInEuroPerYear(0)
                .build();
        //When
        Property actual = calculationPropertyService.setMaintenanceCostAndImprovementPerYear(property);
        //Then
        Property expected = Property.builder()
                .maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear(25)
                .sizeInSquareMeter(30)
                .maintenanceCostAndImprovementInEuroPerYear(750)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set vacancy rate per year")
    void setVacancyRatePerYearTest() {
        //Given
        Property property = Property.builder()
                .vacancyRateInPercent(5)
                .netRentInEuroPerYear(4800)
                .vacancyRateInEuroPerYear(0)
                .build();
        //When
        Property actual = calculationPropertyService.setVacancyRatePerYear(property);
        //Then
        Property expected = Property.builder()
                .vacancyRateInPercent(5)
                .netRentInEuroPerYear(4800)
                .vacancyRateInEuroPerYear(240)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set adjusted net rent")
    void setAdjustedNetRentTest() {
        //Given
        Property property = Property.builder()
                .netRentInEuroPerYear(4800)
                .maintenanceCostAndImprovementInEuroPerYear(750)
                .vacancyRateInEuroPerYear(240)
                .managementFeeInEuroPerYear(300)
                .adjustedNetRentInEuroPerYear(0)
                .build();
        //When
        Property actual = calculationPropertyService.setAdjustedNetRent(property);
        //Then
        Property expected = Property.builder()
                .netRentInEuroPerYear(4800)
                .maintenanceCostAndImprovementInEuroPerYear(750)
                .vacancyRateInEuroPerYear(240)
                .managementFeeInEuroPerYear(300)
                .adjustedNetRentInEuroPerYear(3510)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set adjusted net return")
    void setAdjustedNetReturnTest() {
        //Given
        Property property = Property.builder()
                .adjustedNetRentInEuroPerYear(3510)
                .overallPurchasePriceInEuro(107587)
                .adjustedNetReturnInPercent(0)
                .build();
        //When
        Property actual = calculationPropertyService.setAdjustedNetReturn(property);
        //Then
        Property expected = Property.builder()
                .adjustedNetRentInEuroPerYear(3510)
                .overallPurchasePriceInEuro(107587)
                .adjustedNetReturnInPercent(3.262475949696525)
                .build();
        assertThat(actual, is(expected));
    }

    @Test
    @DisplayName("set adjusted net return with other data")
    void setAdjustedNetReturnTest2() {
        //Given
        Property property = Property.builder()
                .adjustedNetRentInEuroPerYear(38700)
                .overallPurchasePriceInEuro(568400)
                .adjustedNetReturnInPercent(0)
                .build();
        //When
        Property actual = calculationPropertyService.setAdjustedNetReturn(property);
        //Then
        Property expected = Property.builder()
                .adjustedNetRentInEuroPerYear(38700)
                .overallPurchasePriceInEuro(568400)
                .adjustedNetReturnInPercent(6.808585503166784)
                .build();
        assertThat(actual, is(expected));
    }
}
