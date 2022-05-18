package com.caloriedoc.gatewayservice.config;

import com.caloriedoc.gatewayservice.filter.JWTAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Autowired
    private JWTAuthenticationFilter filter;

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes().route("auth-service", r -> r.path("/apis/auth/**").filters(f -> f.filter(filter)).uri("http://localhost:9000/"))
                .route("user-service", r -> r.path("/apis/users/**").filters(f -> f.filter(filter)).uri("http://localhost:8082/"))
                .route("food-service", r -> r.path("/apis/foodItems/**").filters(f -> f.filter(filter)).uri("http://localhost:8081/")).build();
    }
}
