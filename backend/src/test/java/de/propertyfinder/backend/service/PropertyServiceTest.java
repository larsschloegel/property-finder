package de.propertyfinder.backend.service;


import de.propertyfinder.backend.api.octoparse.OctoparseApiService;
import de.propertyfinder.backend.mapper.PropertyMapper;
import de.propertyfinder.backend.model.AdditionalPurchaseCosts;
import de.propertyfinder.backend.model.PlzGermany;
import de.propertyfinder.backend.model.Property;
import de.propertyfinder.backend.repo.AdditionalPurchaseCostRepo;
import de.propertyfinder.backend.repo.PlzRepo;
import de.propertyfinder.backend.repo.PropertyRepo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

class PropertyServiceTest {


    private final PropertyRepo propertyRepo = mock(PropertyRepo.class);
    private final OctoparseApiService octoparseApiService = mock(OctoparseApiService.class);
    private final PropertyMapper propertyMapper = mock(PropertyMapper.class);
    private final CalculationPropertyService calculationPropertyService = mock(CalculationPropertyService.class);

    private final PropertyService propertyService = new PropertyService(propertyRepo, propertyMapper, octoparseApiService, calculationPropertyService);

}