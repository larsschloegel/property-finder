package de.propertyfinder.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
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
    private final CalculationPropertyService calculationPropertyService;


    public List<Property> getAllPropertiesFromApiAfterMapping() throws JsonProcessingException {
        List<OctoparseApiDto> octoparseApiDtoList = octoparseApiService.getAllProperties();
        return propertyMapper.toProperties(octoparseApiDtoList);
    }

    public List<Property> addPropertiesFromApiToDB() throws JsonProcessingException {
        List<OctoparseApiDto> octoparseApiDtoList = octoparseApiService.getAllProperties();
        propertyRepo.deleteAll();
        return (List<Property>) propertyRepo.saveAll(propertyMapper.toProperties(octoparseApiDtoList));
    }

    public List<Property> getAllProperties() {
        return propertyRepo.findAll();
    }

    public Property getSingleProperty(String id) {
        Optional<Property> optionalProperty = propertyRepo.findById(id);
        if (optionalProperty.isEmpty()) {
            throw new NoSuchElementException("Property with id: " + id + " not found!");
        }
        return optionalProperty.get();
    }

    public List<Property> addPropertiesFromPostman(List<Property> properties) {
        List<Property> propertiesWithInitialValues = calculationPropertyService.setInitialValues(properties);
        return (List<Property>) propertyRepo.saveAll(properties);
    }


}
