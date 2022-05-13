package com.caloriedoc.foodservice.manager;

import com.caloriedoc.foodservice.exception.ErrorResponse;
import com.caloriedoc.foodservice.exception.GenericException;
import com.caloriedoc.foodservice.model.FoodItem;
import com.caloriedoc.foodservice.repository.FoodItemCustomRepository;
import com.caloriedoc.foodservice.repository.FoodItemRepository;
import com.caloriedoc.foodservice.repository.impl.FoodItemCustomRepositoryImpl;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class FoodItemManager {

    Logger logger = LoggerFactory.getLogger(FoodItemManager.class);

    @Autowired
    private FoodItemRepository foodItemRepository;

    @Autowired
    private FoodItemCustomRepositoryImpl foodItemCustomRepositoryImpl;

    public FoodItem createFoodItem(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    public List<FoodItem> createFoodItems(List<FoodItem> foodItems) {
        return foodItemRepository.saveAll(foodItems);
    }

    public FoodItem getFoodItem(String foodItemCode) throws GenericException {
        if (StringUtils.isEmpty(foodItemCode)) {
            String errorMessage = "foodItemCode cannot be empty or null";
            logger.error(errorMessage);
            throw new GenericException(new ErrorResponse(errorMessage), HttpStatus.BAD_REQUEST);
        }
        FoodItem foodItem = foodItemRepository.findByFoodItemCode(foodItemCode);
        if (Objects.isNull(foodItem)) {
            String errorMessage = String.format("FoodItem with code %s", foodItemCode);
            logger.error(errorMessage);
            throw new GenericException(new ErrorResponse(errorMessage), HttpStatus.NOT_FOUND);
        }
        return foodItem;
    }

    public List<FoodItem> searchFoodItem(String name) {
        return foodItemCustomRepositoryImpl.searchFoodItemByName(name);
    }

}
