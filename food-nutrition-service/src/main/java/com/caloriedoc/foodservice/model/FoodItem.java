package com.caloriedoc.foodservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.TextScore;

@Data
@Document
public class FoodItem {

    @Id
    private String id;
    private String foodItemCode;
    @TextIndexed
    private String name;
    private String category;
    private Double weight;
    private Double defaultQuantity;
    private String defaultPortion;
    private Double calories;
    private Double protein;
    private Double fat;
    private Double carb;
    private Double fibre;

    @TextScore
    private Float score;
}
