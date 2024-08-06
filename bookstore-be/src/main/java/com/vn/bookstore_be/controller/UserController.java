package com.vn.bookstore_be.controller;

import com.vn.bookstore_be.dto.LoginRequestDTO;
import com.vn.bookstore_be.dto.LoginResponseDTO;
import com.vn.bookstore_be.exception.AuthenticationException;
import com.vn.bookstore_be.model.User;
import com.vn.bookstore_be.service.JwtService;
import com.vn.bookstore_be.service.UserSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final UserSerivce userSerivce;
    private final JwtService jwtService;

    @Autowired
    public UserController(AuthenticationManager authenticationManager, UserSerivce userSerivce, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userSerivce = userSerivce;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequestDTO) throws AuthenticationException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));
            User user = userSerivce.getUserByEmail(loginRequestDTO.getEmail());
            return ResponseEntity.ok(new LoginResponseDTO(user, jwtService.generateToken(user.getEmail())));
        } catch (Exception e) {
            System.out.println(e);
            throw new AuthenticationException("Invalid email or password");
        }
    }
}
