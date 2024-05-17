package com.ms.user.config;


import com.fasterxml.jackson.databind.ObjectMapper;


import com.ms.user.model.User;
import com.ms.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    @Autowired
    private  UserRepository repository;
    @Autowired
    private  ResourceLoader resourceLoader;



    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Resource resource = resourceLoader.getResource("classpath:mongodb.users.json");
        try (InputStream inputStream = resource.getInputStream()) {
            User[] users = mapper.readValue(inputStream, User[].class);

            for (User user : users) {
                repository.save(user);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}