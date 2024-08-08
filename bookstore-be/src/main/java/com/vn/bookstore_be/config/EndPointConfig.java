package com.vn.bookstore_be.config;

public class EndPointConfig {

    public static final String ALLOWED_ORIGINS = "http://localhost:3000";

    public static final String[] PUBLIC_GET_ENDPOINTS = {
            "/hello-world",
            "/books",
            "/books/**"
    };

    public static final String[] PUBLIC_POST_ENDPOINTS = {
            "/users/login",
            "/users/send-otp",
            "/users/verify-otp",
    };

    public static final String[] ALLOWED_METHODS = {
            "GET",
            "POST",
            "PUT",
            "DELETE"
    };
}
