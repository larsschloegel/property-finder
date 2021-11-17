package de.propertyfinder.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class AdminController {
    private final PropertyService propertyService;

    @GetMapping("api/admin/properties")
    public List<Property> getAllPropertiesFromApiAfterMapping() throws JsonProcessingException {
        return propertyService.getAllPropertiesFromApiAfterMapping();
    }

    @PostMapping("api/admin/addpropertiesfromApi")
    public List<Property> addPropertiesFromApiToDB() throws JsonProcessingException {
        return propertyService.addPropertiesFromApiToDB();
    }
    @PostMapping("api/admin/addpropertiesfromPostman")
    public List<Property> addPropertiesFromApiToDB(@RequestBody List<Property> properties)  {
        return propertyService.addPropertiesFromPostman(properties);
    }
}
