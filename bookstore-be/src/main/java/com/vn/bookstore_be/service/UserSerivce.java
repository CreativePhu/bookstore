package com.vn.bookstore_be.service;

import com.vn.bookstore_be.dto.ForgotPasswordRequestDTO;
import com.vn.bookstore_be.dto.LoginRequestDTO;
import com.vn.bookstore_be.dto.LoginResponseDTO;
import com.vn.bookstore_be.dto.RegisterRequestDTO;
import com.vn.bookstore_be.exception.AuthenticationException;
import com.vn.bookstore_be.exception.ResourceNotFoundException;
import com.vn.bookstore_be.model.Role;
import com.vn.bookstore_be.model.User;
import com.vn.bookstore_be.repository.RoleRepository;
import com.vn.bookstore_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserSerivce {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final JwtService jwtService;
    private final RedisService redisService;

    @Autowired
    public UserSerivce(AuthenticationManager authenticationManager, UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, RoleRepository roleRepository, JwtService jwtService, RedisService redisService) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.jwtService = jwtService;
        this.redisService = redisService;
    }

    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    public User getUserByEmail(String email){
        return userRepository.findByUserEmailAddress(email);
    }

    // login method
    public ResponseEntity<?> userLogin(LoginRequestDTO loginRequestDTO) throws AuthenticationException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));
            User user = userRepository.findByUserEmailAddress(loginRequestDTO.getEmail());
            return ResponseEntity.ok(new LoginResponseDTO(user, jwtService.generateToken(user.getUserEmailAddress())));
        } catch (Exception e) {
            throw new AuthenticationException("Invalid email or password");
        }
    }

    // register method
    public ResponseEntity<?> userRegister(RegisterRequestDTO registerRequestDTO) {
        if (userRepository.existsByUserEmailAddress(registerRequestDTO.getEmail())) return ResponseEntity.badRequest().body("Email is already taken");

        final String otp = (String) redisService.get(registerRequestDTO.getEmail());
        if (otp == null) return ResponseEntity.badRequest().body("OTP has expired or not found");

        if (registerRequestDTO.getOtp().equals(otp)) {
            redisService.delete(registerRequestDTO.getEmail());

            Role role = roleRepository.findByRoleName("USER");
            if (role == null) throw new ResourceNotFoundException("Role not found with name: USER");

            User user = new User();
            user.setUserFullName(registerRequestDTO.getEmail());
            user.setUserEmailAddress(registerRequestDTO.getEmail());
            user.setUserPassword(passwordEncoder.encode(registerRequestDTO.getPassword()));
            user.setUserStatus(true);
            user.setUserCreatedDate(java.time.LocalDateTime.now());
            user.setUserUpdatedDate(java.time.LocalDateTime.now());
            user.addRole(role);
            userRepository.save(user);

            return ResponseEntity.ok("User has been registered");
        } else {
            return ResponseEntity.badRequest().body("OTP is incorrect");
        }
    }

    // forgot password method
    public ResponseEntity<?> forgotPassword(ForgotPasswordRequestDTO forgotPasswordRequestDTO) {
        User user = userRepository.findByUserEmailAddress(forgotPasswordRequestDTO.getEmail());
        if (user == null) return ResponseEntity.badRequest().body("User not found");

        String otp = (String) redisService.get(forgotPasswordRequestDTO.getEmail());
        if (otp == null) return ResponseEntity.badRequest().body("OTP has expired or not found");

        if (forgotPasswordRequestDTO.getOtp().equals(otp)) {
            redisService.delete(forgotPasswordRequestDTO.getEmail());
            user.setUserPassword(passwordEncoder.encode(forgotPasswordRequestDTO.getPassword()));
            userRepository.save(user);
            return ResponseEntity.ok("Password has been changed");
        } else {
            return ResponseEntity.badRequest().body("OTP is incorrect");
        }
    }
}
