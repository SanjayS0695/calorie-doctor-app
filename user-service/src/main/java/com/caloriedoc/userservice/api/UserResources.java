package com.caloriedoc.userservice.api;

import com.caloriedoc.userservice.exception.GenericException;
import com.caloriedoc.userservice.manager.UserManager;
import com.caloriedoc.userservice.model.User;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("apis/users")
public class UserResources {

    @Autowired
    private UserManager userManager;

    @PostMapping(consumes = "application/json", produces = "application/json")
    private ResponseEntity<User> createUser(@RequestBody @NonNull User user) {
        return ResponseEntity.ok(userManager.createUser(user));
    }

    @PostMapping(value = "/_bulk", consumes = "application/json", produces = "application/json")
    private ResponseEntity<List<User>> createUsers(@RequestBody @NonNull List<User> users) {
        return ResponseEntity.ok(userManager.createUsers(users));
    }

    @GetMapping(produces = "application/json")
    private ResponseEntity<User> getUserByUsername(@RequestParam(value = "username") @NonNull String username) throws GenericException {
        return ResponseEntity.ok(userManager.getUserByUsername(username));
    }

}
