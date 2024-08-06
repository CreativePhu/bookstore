package com.vn.bookstore_be.service;

import com.vn.bookstore_be.model.User;
import com.vn.bookstore_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSerivce {

    private final UserRepository userRepository;

    @Autowired
    public UserSerivce(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }
}
