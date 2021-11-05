package de.propertyfinder.backend.controller;

import de.propertyfinder.backend.api.octoparse.OctoparseApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test")
public class TestController {
    private OctoparseApiService octoparseApiService;

    public TestController(OctoparseApiService octoparseApiService) {
        this.octoparseApiService = octoparseApiService;
    }

    @GetMapping
    public String getData() {
        return octoparseApiService.getAllProperties();
    }
}
