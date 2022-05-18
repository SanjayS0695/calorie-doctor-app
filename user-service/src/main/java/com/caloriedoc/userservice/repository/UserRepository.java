package com.caloriedoc.userservice.repository;

import com.caloriedoc.userservice.exception.GenericException;
import com.caloriedoc.userservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByUsername(String username) throws GenericException;
}
