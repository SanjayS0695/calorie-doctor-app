package com.caloriedoc.foodservice.repository;

import com.caloriedoc.foodservice.model.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodItemRepository extends MongoRepository<FoodItem, String> {

    FoodItem findByFoodItemCode(String foodItemCode);
}
