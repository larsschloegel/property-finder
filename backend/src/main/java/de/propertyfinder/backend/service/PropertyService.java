package de.propertyfinder.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import de.propertyfinder.backend.api.octoparse.OctoparseApiDto;
import de.propertyfinder.backend.api.octoparse.OctoparseApiService;
import de.propertyfinder.backend.mapper.PropertyMapper;
import de.propertyfinder.backend.model.AdditionalPurchaseCosts;
import de.propertyfinder.backend.model.PlzGermany;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.repo.AdditionalPurchaseCostRepo;
import de.propertyfinder.backend.repo.PlzRepo;
import de.propertyfinder.backend.repo.PropertyRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PropertyService {

    private final PropertyRepo propertyRepo;
    private final PropertyMapper propertyMapper;
    private final OctoparseApiService octoparseApiService;
    private final PlzRepo plzRepo;
    private final AdditionalPurchaseCostRepo additionalPurchaseCostRepo;

    public List<Property> getAllPropertiesFromApiAfterMapping() throws JsonProcessingException {
        List<OctoparseApiDto> octoparseApiDtoList = octoparseApiService.getAllProperties();
        return propertyMapper.toProperties(octoparseApiDtoList);
    }

    public List<Property> addPropertiesFromApiToDB() throws JsonProcessingException {
        propertyRepo.deleteAll();
        List<OctoparseApiDto> octoparseApiDtoList = octoparseApiService.getAllProperties();
        return (List<Property>) propertyRepo.saveAll(propertyMapper.toProperties(octoparseApiDtoList));
    }

    public List<Property> getAllProperties() {
        return propertyRepo.findAll();
    }

    public Property getSingleProperty(String id){
        Optional<Property> optionalProperty = propertyRepo.findById(id);
        if (optionalProperty.isEmpty()){
            throw new NoSuchElementException("Property with id: "+ id +" not found!");
        }
        return optionalProperty.get();
    }

    public List<Property> addPropertiesFromPostman(List<Property> properties) {
        properties.stream()
                .map(this::setState)
                .map(this::setRealEstateAgentFee)
                .map(this::setRealEstateTransferTax)
                .map(this::setNotaryFee)
                .map(this::setSumAdditionalPurchaseCost)
                .map(this::setOverallPurchasePrice)
                .collect(Collectors.toList());
        return (List<Property>) propertyRepo.saveAll(properties);
    }

    public Property setState(Property property) {
        PlzGermany plzGermany = plzRepo.findByPlz(property.getPlz());
        property.setState(plzGermany.getBundesland());
        return property;
    }

    public Property setRealEstateAgentFee(Property property){
        AdditionalPurchaseCosts additionalPurchaseCosts = additionalPurchaseCostRepo.findByState(property.getState());
        property.setRealEstateAgentFeeInPercent(additionalPurchaseCosts.getRealEstateAgentFeeInPercent());
        property.setRealEstateAgentFeeInEuro(property.getRealEstateAgentFeeInPercent()*property.getPurchasePriceInEuro());
        return property;
    }

    public Property setRealEstateTransferTax(Property property){
        AdditionalPurchaseCosts additionalPurchaseCosts = additionalPurchaseCostRepo.findByState(property.getState());
        property.setRealEstateTransferTaxInPercent(additionalPurchaseCosts.getRealEstateTransferTaxInPercent());
        property.setRealEstateTransferTaxInEuro(property.getRealEstateTransferTaxInPercent()*property.getPurchasePriceInEuro());
        return property;
    }

    public Property setNotaryFee(Property property){
        AdditionalPurchaseCosts additionalPurchaseCosts = additionalPurchaseCostRepo.findByState(property.getState());
        property.setNotaryFeeInPercent(additionalPurchaseCosts.getNotaryFeeInPercent());
        property.setNotaryFeeInEuro(property.getNotaryFeeInPercent()*property.getPurchasePriceInEuro());
        return property;
    }

    public Property setSumAdditionalPurchaseCost(Property property){
        property.setSumAdditionalPurchaseCostInEuro(property.getRealEstateAgentFeeInEuro() + property.getRealEstateTransferTaxInEuro() + property.getNotaryFeeInEuro());
        return property;
    }

    public Property setOverallPurchasePrice(Property property){
        property.setOverallPurchasePriceInEuro(property.getPurchasePriceInEuro() + property.getSumAdditionalPurchaseCostInEuro());
        return property;
    }






}
