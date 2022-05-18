package com.caloriedoc.authservice.service;

import com.caloriedoc.authservice.interservice.clients.UserServiceClient;
import com.caloriedoc.authservice.interservice.dto.UserDTO;
import com.caloriedoc.authservice.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceManager {

    @Autowired
    private UserServiceClient userServiceClient;

    public User create(User user) throws Exception {
        ResponseEntity<UserDTO> response =  userServiceClient.createUser(user);
        ObjectMapper objectMapper = new ObjectMapper();
       return objectMapper.convertValue(response.getBody(), User.class);
    }
}
