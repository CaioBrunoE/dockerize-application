package com.ms.order.config;

import com.fasterxml.jackson.databind.ObjectMapper;


import com.ms.order.model.Order;
import com.ms.order.repository.OrderRepository;
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
    private OrderRepository repository;

    @Autowired
    private ResourceLoader resourceLoader;


    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Resource resource = resourceLoader.getResource("classpath:order.json");
        try (InputStream inputStream = resource.getInputStream()) {
            Order[] orders = mapper.readValue(inputStream, Order[].class);

            for (Order order : orders) {
                repository.save(order);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}