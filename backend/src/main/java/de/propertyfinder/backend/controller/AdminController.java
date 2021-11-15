package de.propertyfinder.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class AdminController {
    private PropertyService propertyService;

    @GetMapping("admin/properties")
    public List<Property> getAllPropertiesFromApiAfterMapping() throws JsonProcessingException {
        return propertyService.getAllPropertiesFromApiAfterMapping();
    }

    @PostMapping("admin/addproperties")
    public List<Property> addPropertiesFromApiToDB() throws JsonProcessingException {
        return propertyService.addPropertiesFromApiToDB();
    }
}
