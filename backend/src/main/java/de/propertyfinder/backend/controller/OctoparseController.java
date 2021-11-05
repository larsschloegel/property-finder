package de.propertyfinder.backend.controller;

import de.propertyfinder.backend.api.octoparse.OctoparseApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("octoparse")
public class OctoparseController {
    private OctoparseApiService octoparseApiService;

    public OctoparseController(OctoparseApiService octoparseApiService) {
        this.octoparseApiService = octoparseApiService;
    }

    @PostMapping
    public String getData() {
        return octoparseApiService.getAllProperties();
    }
}
