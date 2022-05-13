package com.caloriedoc.foodservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class Config extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "calorie-doc";
    }

    @Override
    protected boolean autoIndexCreation() {
        return true;
    }
}
