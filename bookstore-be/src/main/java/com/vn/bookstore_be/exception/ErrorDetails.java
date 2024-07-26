package com.vn.bookstore_be.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorDetails {
    private int statusCode;
    private String message;
    private LocalDateTime timestamp;
}
