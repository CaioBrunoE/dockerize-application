package com.ms.client.config;


import com.fasterxml.jackson.databind.ObjectMapper;

import com.ms.client.model.Client;
import com.ms.client.repository.ClientRepository;
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
    private  ClientRepository repository;
    @Autowired
    private  ResourceLoader resourceLoader;


    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Resource resource = resourceLoader.getResource("classpath:clients.json");
        try (InputStream inputStream = resource.getInputStream()) {
            Client[] clients = mapper.readValue(inputStream, Client[].class);

            for (Client client : clients) {
                repository.save(client);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}