package com.ms.service.config;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.ms.service.model.ServiceModel;
import com.ms.service.repository.ServiceRepository;
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
    private  ServiceRepository repository;
    @Autowired
    private  ResourceLoader resourceLoader;

    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Resource resource = resourceLoader.getResource("classpath:mongodb.services.json");
        try (InputStream inputStream = resource.getInputStream()) {
            ServiceModel[] serviceModels = mapper.readValue(inputStream, ServiceModel[].class);

            for (ServiceModel serviceModel : serviceModels) {
                repository.save(serviceModel);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}