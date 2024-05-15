package com.ms.service.controller;

import com.ms.service.dto.ServiceDTO;
import com.ms.service.exceptions.ServiceException;
import com.ms.service.service.ServiceServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final ServiceServices serviceServices;

    @Autowired
    public ServiceController(ServiceServices serviceServices){
        this.serviceServices = serviceServices;
    }

    @GetMapping
    public ResponseEntity<List<ServiceDTO>> findAll(){
        try{
            List<ServiceDTO> serviceDTOS = serviceServices.findAll();
            if (serviceDTOS.isEmpty()){
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(serviceDTOS);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity<ServiceDTO> create(@RequestBody @Valid ServiceDTO serviceDTO){
        try {
            ServiceDTO createdService = serviceServices.create(serviceDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdService);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/getId/{id}")
    public ResponseEntity<ServiceDTO> findById(@PathVariable String id){
        try {
            ServiceDTO serviceDTO = serviceServices.findById(id);
            return ResponseEntity.ok(serviceDTO);
        } catch (ServiceException e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/getName/{name}")
    public ResponseEntity<ServiceDTO> findByName(@PathVariable String name){
        try {
            ServiceDTO serviceDTO = serviceServices.findByName(name);
            if (serviceDTO != null) {
                return ResponseEntity.ok(serviceDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping(value = "/getIdCategory/{idCategory}")
    public ResponseEntity<List<ServiceDTO>> findByIdCategory(@PathVariable String idCategory){
        try {
            List<ServiceDTO> serviceDTO = serviceServices.findByIdCategory(idCategory);
            if(serviceDTO.isEmpty()){
                return ResponseEntity.notFound().build();
            } else {
                return ResponseEntity.ok(serviceDTO);
            }
        } catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ServiceDTO> update(@PathVariable String id, @RequestBody @Valid ServiceDTO serviceDTO){
        try{
            ServiceDTO updatedService = serviceServices.update(id, serviceDTO);
            return ResponseEntity.ok(updatedService);
        } catch (ServiceException e){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id){
        try {
            serviceServices.delete(id);
            return ResponseEntity.ok().build();
        } catch (ServiceException e){
            return ResponseEntity.notFound().build();
        }
    }
}
