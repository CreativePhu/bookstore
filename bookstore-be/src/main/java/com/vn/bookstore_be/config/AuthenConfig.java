package com.vn.bookstore_be.config;

import com.vn.bookstore_be.service.UserDetailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;

@Configuration
public class AuthenConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider(UserDetailService userDetailService){
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(configurer -> configurer
                .requestMatchers(HttpMethod.GET, EndPointConfig.PUBLIC_GET_ENDPOINTS).permitAll()
                .anyRequest().authenticated()
        );
        http.httpBasic(Customizer.withDefaults());
        http.cors(Customizer.withDefaults());
        http.csrf(AbstractHttpConfigurer::disable);
//        http.cors(cors -> cors.configurationSource(request -> {
//            CorsConfiguration corsConfiguration = new CorsConfiguration();
//            corsConfiguration.addAllowedOrigin(EndPointConfig.ALLOWED_ORIGINS);
//            corsConfiguration.setAllowedMethods(Arrays.stream(EndPointConfig.ALLOWED_METHODS).toList());
//            corsConfiguration.addAllowedHeader("*");
//            return corsConfiguration;
//        }));
        return http.build();
    }
}
