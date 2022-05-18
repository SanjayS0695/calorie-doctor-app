package com.caloriedoc.authservice.interservice.clients;

import com.caloriedoc.authservice.interservice.dto.UserDTO;
import com.caloriedoc.authservice.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserServiceClientFallback implements UserServiceClient{

    @Override
    public ResponseEntity<UserDTO> getUserByUsername(String username) throws UsernameNotFoundException {
        throw new UsernameNotFoundException(String.format("Username %s not found", username));
    }

    @Override
    public ResponseEntity<UserDTO> createUser(User user) throws Exception {
        return null;
    }
}
