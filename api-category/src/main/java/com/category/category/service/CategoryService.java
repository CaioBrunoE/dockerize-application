package com.category.category.service;

import com.category.category.domain.dto.CategoryDTO;
import com.category.category.domain.entity.Category;
import com.category.category.domain.entity.TypeCategory;
import com.category.category.exception.CategoryNotFoundException;
import com.category.category.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    @Transactional
    public CategoryDTO create(CategoryDTO categoryDTO) throws Exception {
        Category category = new Category(categoryDTO);
        category.setCreated(LocalDateTime.now().toString());
        repository.save(category);
        return new CategoryDTO(category);
    }

    public List<CategoryDTO> findAll() throws Exception {
        List<Category> list = repository.findAll();
        if (list.isEmpty()) {
            throw new CategoryNotFoundException("No categories found!");
        }
        List<CategoryDTO> listDto = list.stream().map(CategoryDTO::new).toList();
        return listDto;
    }

    public CategoryDTO findById(String id) throws Exception {
        return repository.findById(id)
                .map(CategoryDTO::new)
                .orElseThrow(() -> new CategoryNotFoundException("Category not found with ID: " + id));
    }

    public List<CategoryDTO> findByTypeService () {
        List<Category> list = repository.findByType(TypeCategory.SERVICE.getValue());
        if (list.isEmpty()) {
            throw new CategoryNotFoundException("No services found!");
        }
        return list.stream().map(CategoryDTO::new).toList();
    }

    public List<CategoryDTO> findByTypeProduct () {
        List<Category> list = repository.findByType(TypeCategory.PRODUCT.getValue());
        if (list.isEmpty()) {
            throw new CategoryNotFoundException("No products found!");
        }
        return list.stream().map(CategoryDTO::new).toList();
    }


    @Transactional
    public CategoryDTO update(String id, CategoryDTO categoryDTO) throws Exception {
        Optional<Category> optionalCategory = repository.findById(id);
        if (optionalCategory.isPresent()) {
            Category entity = optionalCategory.get();
            entity.setName(categoryDTO.getName());
            entity.setType(categoryDTO.getType());
            entity.setUpdated(LocalDateTime.now().toString());
            repository.save(entity);
            return new CategoryDTO(entity);
        } else {
            throw new CategoryNotFoundException("Category not found with ID: " + id);
        }
    }

    public void delete(String id) throws Exception{
        if (!repository.existsById(id)) {
            throw new CategoryNotFoundException("Client not found with ID: " + id);
        }
        repository.deleteById(id);
    }

}
