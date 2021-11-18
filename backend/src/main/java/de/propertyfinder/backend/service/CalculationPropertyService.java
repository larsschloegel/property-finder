package de.propertyfinder.backend.service;

import de.propertyfinder.backend.model.AdditionalPurchaseCosts;
import de.propertyfinder.backend.model.PlzGermany;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.repo.AdditionalPurchaseCostRepo;
import de.propertyfinder.backend.repo.PlzRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CalculationPropertyService {

    private final PlzRepo plzRepo;
    private final AdditionalPurchaseCostRepo additionalPurchaseCostRepo;


    public List<Property> setInitialValues(List<Property> properties) {
        properties.stream()
                .map(this::setState)
                .map(this::setRealEstateAgentFee)
                .map(this::setRealEstateTransferTax)
                .map(this::setNotaryFee)
                .map(this::setSumAdditionalPurchaseCost)
                .map(this::setOverallPurchasePrice)
                .map(this::setBankLoan)
                .map(this::setInitialRepayment)
                .map(this::setInterestRate)
                .map(this::setCreditRatePerYear)
                .map(this::setCreditRatePerMonth)
                .map(this::setEquityCapital)
                .collect(Collectors.toList());
        return properties;
    }

    public Property setState(Property property) {
        PlzGermany plzGermany = plzRepo.findByPlz(property.getPlz());
        property.setState(plzGermany.getBundesland());
        return property;
    }

    public Property setRealEstateAgentFee(Property property) {
        AdditionalPurchaseCosts additionalPurchaseCosts = additionalPurchaseCostRepo.findByState(property.getState());
        property.setRealEstateAgentFeeInPercent(additionalPurchaseCosts.getRealEstateAgentFeeInPercent());
        property.setRealEstateAgentFeeInEuro(property.getRealEstateAgentFeeInPercent() * property.getPurchasePriceInEuro() /100);
        return property;
    }

    public Property setRealEstateTransferTax(Property property) {
        AdditionalPurchaseCosts additionalPurchaseCosts = additionalPurchaseCostRepo.findByState(property.getState());
        property.setRealEstateTransferTaxInPercent(additionalPurchaseCosts.getRealEstateTransferTaxInPercent());
        property.setRealEstateTransferTaxInEuro(property.getRealEstateTransferTaxInPercent() * property.getPurchasePriceInEuro() /100);
        return property;
    }

    public Property setNotaryFee(Property property) {
        AdditionalPurchaseCosts additionalPurchaseCosts = additionalPurchaseCostRepo.findByState(property.getState());
        property.setNotaryFeeInPercent(additionalPurchaseCosts.getNotaryFeeInPercent());
        property.setNotaryFeeInEuro(property.getNotaryFeeInPercent() * property.getPurchasePriceInEuro() /100);
        return property;
    }

    public Property setSumAdditionalPurchaseCost(Property property) {
        property.setSumAdditionalPurchaseCostInEuro(property.getRealEstateAgentFeeInEuro() + property.getRealEstateTransferTaxInEuro() + property.getNotaryFeeInEuro());
        return property;
    }

    public Property setOverallPurchasePrice(Property property) {
        property.setOverallPurchasePriceInEuro(property.getPurchasePriceInEuro() + property.getSumAdditionalPurchaseCostInEuro());
        return property;
    }

    public Property setBankLoan(Property property){
        property.setBankLoanInEuro(property.getOverallPurchasePriceInEuro());
        return property;
    }

    public Property setInitialRepayment(Property property){
        property.setInitialRepaymentInPercent(1.0);
        return property;
    }

    public Property setInterestRate(Property property){
        property.setInterestRateInPercent(1.5);
        return property;
    }

    public Property setCreditRatePerYear(Property property){
        property.setCreditRateInEuroPerYear((property.getInitialRepaymentInPercent()+ property.getInterestRateInPercent())* property.getBankLoanInEuro());
        return property;
    }

    public Property setCreditRatePerMonth(Property property){
        property.setCreditRateInEuroPerMonth(property.getCreditRateInEuroPerYear()/12);
        return property;
    }

    public Property setEquityCapital(Property property){
        property.setEquityCapitalInEuro(0.0);
        return property;
    }
}
