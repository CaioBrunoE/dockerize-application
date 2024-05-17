package com.category.category.config;

import com.category.category.domain.entity.Category;
import com.category.category.repository.CategoryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

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
    private CategoryRepository repository;

    @Autowired
    private ResourceLoader resourceLoader;


    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Resource resource = resourceLoader.getResource("classpath:categories.json");
        try (InputStream inputStream = resource.getInputStream()) {
            Category[] categories = mapper.readValue(inputStream, Category[].class);

            for (Category category : categories) {
                repository.save(category);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}