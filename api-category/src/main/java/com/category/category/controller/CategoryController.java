package com.category.category.controller;

import com.category.category.domain.dto.CategoryDTO;
import com.category.category.domain.entity.TypeCategory;
import com.category.category.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoryService service;

    @PostMapping("/create")
    public ResponseEntity create(@RequestBody @Valid CategoryDTO categoryDTO) {
        try {
            CategoryDTO createdCategory = service.create(categoryDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<CategoryDTO>> findAll() {
        try{
            List<CategoryDTO> categories = service.findAll();
            if(categories.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("/findByTypeService")
    public ResponseEntity<List<CategoryDTO>> findByTypeService() {
        try{
            List<CategoryDTO> categories = service.findByTypeService();
            if(categories.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/findByTypeProduct")
    public ResponseEntity<List<CategoryDTO>> findByTypeProduct() {
        try{
            List<CategoryDTO> categories = service.findByTypeProduct();
            if(categories.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<CategoryDTO> findById(@PathVariable String id) {
        try{
            CategoryDTO category = service.findById(id);
            return ResponseEntity.ok(category);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity update(@PathVariable String id, @RequestBody CategoryDTO categoryDTO) {
        try {
            CategoryDTO updatedCategory = service.update(id, categoryDTO);
            return ResponseEntity.ok(updatedCategory);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        try{
            service.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
