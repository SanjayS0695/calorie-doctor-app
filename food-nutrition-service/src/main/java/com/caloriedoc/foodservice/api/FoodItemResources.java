package com.caloriedoc.foodservice.api;

import com.caloriedoc.foodservice.exception.GenericException;
import com.caloriedoc.foodservice.manager.FoodItemManager;
import com.caloriedoc.foodservice.model.FoodItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:8080"})
@RequestMapping("apis/foodItems")
public class FoodItemResources {

    @Autowired
    private FoodItemManager foodItemManager;

    @PostMapping(consumes = "application/json", produces = "application/json")
    private ResponseEntity<FoodItem> createFoodItem(@RequestBody @NotNull FoodItem foodItem) {
        return ResponseEntity.ok(foodItemManager.createFoodItem(foodItem));
    }

    @PostMapping(value = "/_bulk", consumes = "application/json", produces = "application/json")
    private ResponseEntity<List<FoodItem>> createFoodItems(@RequestBody @NotNull List<FoodItem> foodItems) {
        return ResponseEntity.ok(foodItemManager.createFoodItems(foodItems));
    }

    @GetMapping(produces = "application/json")
    private ResponseEntity<FoodItem> getFoodItem(@RequestParam(value = "foodItemCode") @NotNull String foodItemCode) throws GenericException {
        return ResponseEntity.ok(foodItemManager.getFoodItem(foodItemCode));
    }

    @PostMapping(value = "/_search", consumes = "application/json", produces = "application/json")
    private ResponseEntity<List<FoodItem>> searchFoodItem(@RequestBody @NotNull FoodItem foodItem) {
        return ResponseEntity.ok(foodItemManager.searchFoodItem(foodItem.getName()));
    }

}
