package com.category.category.repository;

import com.category.category.domain.dto.CategoryDTO;
import com.category.category.domain.entity.Category;
import com.category.category.domain.entity.TypeCategory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CategoryRepository extends MongoRepository<Category, String> {

    List<Category> findByType(int type);

}
