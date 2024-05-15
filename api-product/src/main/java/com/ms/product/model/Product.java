package com.ms.product.model;


import com.ms.product.dto.ProductDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@Builder
@Document(collection = "products")
public class Product implements Serializable {
    @Id
    private String id;
    private String name;
    private String description;
    private BigDecimal price;
    private String idCategory;
    private BigDecimal discount;
    private String brand;
    private String stock;
    private String supplier;
    private String created;
    private String updated;
    private String registryUser;
    private String image;
    private Integer quantity;




    /*
    //Dependeria de que tipo de e-commerce ou produto estaria lidando, mas poderia ter outros atributos, como:
    private String weight;
    private String dimensions;
    private String expiration;
 */
    public Product (ProductDTO productDTO){
        BeanUtils.copyProperties(productDTO, this);
    }
    public Product() {
        super();
    }
}