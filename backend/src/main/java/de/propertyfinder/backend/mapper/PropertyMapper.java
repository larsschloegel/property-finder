package de.propertyfinder.backend.mapper;

import de.propertyfinder.backend.api.octoparse.OctoparseApiDto;
import de.propertyfinder.backend.model.Property;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PropertyMapper {

    public static Property OctoparseApiDtoToProperty(OctoparseApiDto octoparseApiDto){
        return  Property
                .builder()
                .name(octoparseApiDto.getPropertyName())
                .source("Immobilien Scout 24")
                .exposeUrl(octoparseApiDto.getExposeUrl())
                .contactPerson(octoparseApiDto.getContactPerson())
                .subtyp(octoparseApiDto.getSubtyp())
                .plz(octoparseApiDto.getPlz())
                .city(octoparseApiDto.getCity())
                .purchasePriceInEuro(Double.parseDouble(octoparseApiDto.getPurchasePrice()))
                .sizeInSquareMeter(Double.parseDouble(octoparseApiDto.getSize()))
                .build();
    }

    public List<Property> toProperties(List<OctoparseApiDto> octoparseApiDtoList){
        return octoparseApiDtoList
                .stream()
                .map(PropertyMapper::OctoparseApiDtoToProperty)
                .toList();
    }
}
