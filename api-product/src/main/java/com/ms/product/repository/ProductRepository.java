package com.ms.product.repository;


import com.ms.product.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    Optional<Product> findByName(String name);

    List<Product> findByIdCategory(String idCategory);

    List<Product> findByDiscountBetween(String lesser, String greater);
}