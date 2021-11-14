package de.propertyfinder.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.propertyfinder.backend.api.octoparse.OctoparseApiDto;
import de.propertyfinder.backend.api.octoparse.OctoparseApiService;
import de.propertyfinder.backend.mapper.PropertyMapper;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.repo.PropertyRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    private final PropertyRepo propertyRepo;
    private final PropertyMapper propertyMapper;
    private final OctoparseApiService octoparseApiService;

    public PropertyService(PropertyRepo propertyRepo, PropertyMapper propertyMapper, OctoparseApiService octoparseApiService) {
        this.propertyRepo = propertyRepo;
        this.propertyMapper = propertyMapper;
        this.octoparseApiService = octoparseApiService;
    }

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
}
