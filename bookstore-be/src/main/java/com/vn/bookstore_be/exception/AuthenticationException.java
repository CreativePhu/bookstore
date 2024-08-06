package com.vn.bookstore_be.exception;

public class AuthenticationException extends Exception{
    public AuthenticationException(String message) {
        super(message);
    }
}
