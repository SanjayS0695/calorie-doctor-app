package com.caloriedoc.authservice.service;

import com.caloriedoc.authservice.interservice.clients.UserServiceClient;
import com.caloriedoc.authservice.interservice.dto.UserDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserServiceClient userServiceClient;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ResponseEntity<UserDTO> response = userServiceClient.getUserByUsername(username);
        ObjectMapper objectMapper = new ObjectMapper();
        UserDTO userDTO = objectMapper.convertValue(response.getBody(), UserDTO.class);
        return new User(userDTO.getUsername(), userDTO.getPassword(), new ArrayList<>());
    }
}
