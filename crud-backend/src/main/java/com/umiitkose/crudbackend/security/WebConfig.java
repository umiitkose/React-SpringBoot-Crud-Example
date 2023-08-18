package com.umiitkose.crudbackend.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173") // your reactjs URL //if you use cra please change port.
                .allowedMethods("GET", "POST", "PATCH", "PUT", "DELETE","OPTIONS")
                .allowedHeaders("*") // Adjust headers you need to allow
                .allowCredentials(true); // Add only if you want to access cookie
    }

}
