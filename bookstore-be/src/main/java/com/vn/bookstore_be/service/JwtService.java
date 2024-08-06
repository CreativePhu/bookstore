package com.vn.bookstore_be.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String SECRET;

    @Value("${jwt.expiration}")
    private long EXPIRATION;

    public String generateToken(String email) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expiryDate = now.plusSeconds(EXPIRATION);
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(java.sql.Date.valueOf(now.toLocalDate()))
                .setExpiration(java.sql.Date.valueOf(expiryDate.toLocalDate()))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET).build().parseClaimsJws(token).getBody();
    }

    public String getEmailFromToken(String token) {
        return extractAllClaims(token).getSubject();
    }

    public boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(java.sql.Date.valueOf(LocalDateTime.now().toLocalDate()));
    }

    public boolean validateToken(String token) {
        return !isTokenExpired(token);
    }

}
