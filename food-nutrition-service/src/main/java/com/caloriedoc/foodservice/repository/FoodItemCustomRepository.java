package com.caloriedoc.foodservice.repository;

import com.caloriedoc.foodservice.model.FoodItem;

import java.util.List;

public interface FoodItemCustomRepository {
    List<FoodItem> searchFoodItemByName(String name);
}
