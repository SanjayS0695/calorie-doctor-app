package com.caloriedoc.foodservice.repository.impl;

import com.caloriedoc.foodservice.model.FoodItem;
import com.caloriedoc.foodservice.repository.FoodItemCustomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FoodItemCustomRepositoryImpl implements FoodItemCustomRepository {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public List<FoodItem> searchFoodItemByName(String name) {
        TextCriteria criteria = TextCriteria.forDefaultLanguage()
                .matching(name);
        Query query = TextQuery.queryText(criteria)
                .sortByScore();
        return mongoTemplate.find(query, FoodItem.class);
    }
}
