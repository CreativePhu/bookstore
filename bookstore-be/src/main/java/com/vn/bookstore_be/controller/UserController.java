package com.vn.bookstore_be.controller;

import com.vn.bookstore_be.dto.*;
import com.vn.bookstore_be.exception.AuthenticationException;
import com.vn.bookstore_be.model.User;
import com.vn.bookstore_be.service.EmailService;
import com.vn.bookstore_be.service.JwtService;
import com.vn.bookstore_be.service.RedisService;
import com.vn.bookstore_be.service.UserSerivce;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/users")
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final UserSerivce userSerivce;
    private final JwtService jwtService;
    private final RedisService redisService;
    private final EmailService emailService;

    @Autowired
    public UserController(AuthenticationManager authenticationManager, UserSerivce userSerivce, JwtService jwtService, RedisService redisService, EmailService emailService, BCryptPasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userSerivce = userSerivce;
        this.jwtService = jwtService;
        this.redisService = redisService;
        this.emailService = emailService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequestDTO) throws AuthenticationException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));
            User user = userSerivce.getUserByEmail(loginRequestDTO.getEmail());
            return ResponseEntity.ok(new LoginResponseDTO(user, jwtService.generateToken(user.getEmail())));
        } catch (Exception e) {
            throw new AuthenticationException("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO registerRequestDTO) {
        final String otp = (String) redisService.get(registerRequestDTO.getEmail());
        if (otp == null) return ResponseEntity.badRequest().body("OTP has expired or not found");
        if (registerRequestDTO.getOtp().equals(otp)) {
            redisService.delete(registerRequestDTO.getEmail());
            userSerivce.userRegister(registerRequestDTO);
            return ResponseEntity.ok("User has been registered");
        } else {
            return ResponseEntity.badRequest().body("OTP is incorrect");
        }
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody GenerateOtpRequestDTO generateOtpRequestDTO) throws MessagingException {
        String otp = generateOtp();
        redisService.setWithExpireTime(generateOtpRequestDTO.getEmail(), otp, 2, TimeUnit.MINUTES);
        emailService.sendOTP(generateOtpRequestDTO.getEmail(), otp);
        return ResponseEntity.ok("OTP has been sent to your email");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody VerifyOtpRequestDTO verifyOtpRequestDTO) {
        String otp = (String) redisService.get(verifyOtpRequestDTO.getEmail());
        if (otp == null) return ResponseEntity.badRequest().body("OTP has expired or not found");
        if (otp.equals(verifyOtpRequestDTO.getOtp())) {
            redisService.delete(verifyOtpRequestDTO.getEmail());
            return ResponseEntity.ok("OTP is correct");
        }
        return ResponseEntity.badRequest().body("OTP is incorrect");
    }

    // Generate OTP
    private String generateOtp() {
        return UUID.randomUUID().toString().substring(0, 6);
    }
}
