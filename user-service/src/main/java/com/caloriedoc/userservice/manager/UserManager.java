package com.caloriedoc.userservice.manager;

import com.caloriedoc.userservice.exception.ErrorResponse;
import com.caloriedoc.userservice.exception.GenericException;
import com.caloriedoc.userservice.model.User;
import com.caloriedoc.userservice.repository.UserRepository;
import org.apache.commons.lang.StringUtils;
import org.mindrot.jbcrypt.BCrypt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserManager {

    Logger logger = LoggerFactory.getLogger(UserManager.class);

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        user.setPassword(encodePassword(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> createUsers(List<User> users) {
        return userRepository.saveAll(users);
    }

    public User getUserByUsername(String username) throws GenericException {
        if (StringUtils.isEmpty(username)) {
            String errorMessage = "username cannot be empty or null";
            logger.error(errorMessage);
            throw new GenericException(new ErrorResponse(errorMessage), HttpStatus.BAD_REQUEST);
        }
        User user = userRepository.findByUsername(username);
        if (Objects.isNull(user)) {
            String errorMessage = String.format("User with username %s", username);
            logger.error(errorMessage);
            throw new GenericException(new ErrorResponse(errorMessage), HttpStatus.NOT_FOUND);
        }
        return user;
    }

    private String encodePassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

}
