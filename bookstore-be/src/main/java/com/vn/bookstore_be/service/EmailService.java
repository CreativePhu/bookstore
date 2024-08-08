package com.vn.bookstore_be.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

    @Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendOTP(String to,  String otpCode) throws MessagingException {

        String body = "<h3>Your OTP Code is:</h3>" +
                "<h2 style='color:blue;'>" + otpCode + "</h2>" +
                "<p>This code is valid for 5 minutes. Please do not share this code with anyone.</p>";

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject("Your OTP Code");
        helper.setText(body, true);
        javaMailSender.send(message);
    }
}
