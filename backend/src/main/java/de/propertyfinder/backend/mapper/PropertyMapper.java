package de.propertyfinder.backend.mapper;

import de.propertyfinder.backend.api.octoparse.OctoparseApiDto;
import de.propertyfinder.backend.model.Property;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PropertyMapper {

    public static Property toProperty(OctoparseApiDto octoparseApiDto){
        return  Property
                .builder()
                .id(octoparseApiDto.getId())
                .name(octoparseApiDto.getPropertyName())
                .source("Immobilien Scout 24")
                .exposeUrl(octoparseApiDto.getExposeUrl())
                .contactPerson(octoparseApiDto.getContactPerson())
                .type(octoparseApiDto.getPropertyTyp())
                .plz(octoparseApiDto.getPlz())
                .city(octoparseApiDto.getCity())
                .purchasePriceInEuro(Double.parseDouble(octoparseApiDto.getPurchasePrice()))
                .sizeInSquareMeter(Double.parseDouble(octoparseApiDto.getSize()))
                .build();
    }

    public List<Property> toProperties(List<OctoparseApiDto> octoparseApiDtoList){
        return octoparseApiDtoList
                .stream()
                .map(PropertyMapper::toProperty)
                .toList();
    }
}
