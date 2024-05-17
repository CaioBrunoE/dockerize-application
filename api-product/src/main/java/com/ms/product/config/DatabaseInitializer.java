package com.ms.product.config;


import com.fasterxml.jackson.databind.ObjectMapper;

import com.ms.product.model.Product;
import com.ms.product.repository.ProductRepository;
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
    private  ProductRepository repository;
    @Autowired
    private  ResourceLoader resourceLoader;



    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Resource resource = resourceLoader.getResource("classpath:mongodb_new.products.json");
        try (InputStream inputStream = resource.getInputStream()) {
            Product[] products = mapper.readValue(inputStream, Product[].class);

            for (Product product : products) {
                repository.save(product);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}