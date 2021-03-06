package de.propertyfinder.backend.repo;

import de.propertyfinder.backend.model.Property;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepo extends PagingAndSortingRepository<Property, String> {

        List<Property> findAll();
}
