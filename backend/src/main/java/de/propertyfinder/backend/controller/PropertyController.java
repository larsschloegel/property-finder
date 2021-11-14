package de.propertyfinder.backend.controller;


import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("properties")
public class PropertyController {

    private final PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping()
    public List<Property> getAllProperties(){
        return propertyService.getAllProperties();
    }
}
