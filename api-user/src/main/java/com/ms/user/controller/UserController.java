package com.ms.user.controller;

import com.ms.user.dto.UserDTO;
import com.ms.user.exceptions.ServiceException;
import com.ms.user.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll() {
        try {
            List<UserDTO> users = service.findAll();
            if (users.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(users);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @PostMapping
    public ResponseEntity<UserDTO> create(@RequestBody @Valid UserDTO entity) {
        try {
            UserDTO createdUser = service.create(entity);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value="/getId/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable String id) {
        try {
            UserDTO user = service.findById(id);
            return ResponseEntity.ok(user);
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value="/getEmail/{email}")
    public ResponseEntity<UserDTO> findByEmail(@PathVariable String email) {
        try {
            UserDTO user = service.findByEmail(email);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ServiceException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable String id, @RequestBody @Valid UserDTO userDTO) {
        try {
            UserDTO updatedUser = service.update(id, userDTO);
            return ResponseEntity.ok(updatedUser);
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        try {
            service.delete(id);
            return ResponseEntity.ok().build();
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

