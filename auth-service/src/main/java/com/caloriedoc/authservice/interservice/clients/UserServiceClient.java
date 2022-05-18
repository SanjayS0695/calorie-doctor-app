package com.caloriedoc.authservice.interservice.clients;

import com.caloriedoc.authservice.interservice.dto.UserDTO;
import lombok.NonNull;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="${com.caloriedoc.user-service.name}", url = "${com.caloriedoc.user-service.url}", fallback = UserServiceClientFallback.class)
public interface UserServiceClient {

    @GetMapping("/apis/users")
    ResponseEntity<UserDTO> getUserByUsername(@RequestParam(value = "username") @NonNull String username) throws UsernameNotFoundException;
}
