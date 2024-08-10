package com.vn.bookstore_be.service;

import com.vn.bookstore_be.dto.RegisterRequestDTO;
import com.vn.bookstore_be.exception.ResourceNotFoundException;
import com.vn.bookstore_be.model.Role;
import com.vn.bookstore_be.model.User;
import com.vn.bookstore_be.repository.RoleRepository;
import com.vn.bookstore_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserSerivce {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Autowired
    public UserSerivce(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public void userRegister(RegisterRequestDTO registerRequestDTO) throws ResourceNotFoundException{
        Role role = roleRepository.findByRoleName("USER");
        if (role == null) throw new ResourceNotFoundException("Role not found with name: USER");

        User user = new User();
        user.setFullName(registerRequestDTO.getEmail());
        user.setEmail(registerRequestDTO.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequestDTO.getPassword()));
        user.setActive(true);
        user.setCreatedDate(java.time.LocalDateTime.now());
        user.setUpdatedDate(java.time.LocalDateTime.now());
        user.addRole(role);

        userRepository.save(user);
    }
}
