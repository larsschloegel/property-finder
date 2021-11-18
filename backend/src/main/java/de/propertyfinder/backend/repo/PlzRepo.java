package de.propertyfinder.backend.repo;

import de.propertyfinder.backend.model.PlzGermany;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlzRepo extends MongoRepository<PlzGermany, String> {
        PlzGermany findByPlz(String plz);
        List<PlzGermany> findAll();
}
