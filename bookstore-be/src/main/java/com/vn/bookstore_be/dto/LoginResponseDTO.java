package com.vn.bookstore_be.dto;

import com.vn.bookstore_be.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {
    private User user;
    private String token;
}
