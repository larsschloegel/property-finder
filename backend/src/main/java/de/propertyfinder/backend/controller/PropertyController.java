package de.propertyfinder.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.service.PropertyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("properties")
public class PropertyController {
    private PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping
    public List<Property> getAllProperties() throws JsonProcessingException {
        return propertyService.getPropertyList();
    }
}
