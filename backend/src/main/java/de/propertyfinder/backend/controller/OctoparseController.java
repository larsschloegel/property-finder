package de.propertyfinder.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.propertyfinder.backend.api.octoparse.OctoparseApiDto;
import de.propertyfinder.backend.api.octoparse.OctoparseApiService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("octoparse")
public class OctoparseController {
    private final OctoparseApiService octoparseApiService;

    @PostMapping
    public List<OctoparseApiDto> getData() throws JsonProcessingException {
        return octoparseApiService.getAllProperties();
    }
}
