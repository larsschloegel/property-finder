package de.propertyfinder.backend.repo;

import de.propertyfinder.backend.model.AdditionalPurchaseCosts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdditionalPurchaseCostRepo extends MongoRepository<AdditionalPurchaseCosts, String> {
    AdditionalPurchaseCosts findByState(String state);
}
