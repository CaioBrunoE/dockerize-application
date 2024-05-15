package com.ms.product.dto;


import com.ms.product.model.Product;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;
//import jakarta.validation.constraints.NotBlank;


import java.io.Serializable;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO implements Serializable {

    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String description;
    @NotNull
    private BigDecimal price;
    @NotBlank
    private String idCategory;
    @NotBlank
    private String brand;
    @NotBlank
    private String stock;
    @NotBlank
    private String supplier;
    @NotBlank
    private String registryUser;
    @NotBlank
    private String image;
    @NotBlank
    private BigDecimal discount;

    private Integer quantity;






    private String created;
    private String updated;


    public  ProductDTO(Product entity){

        BeanUtils.copyProperties(entity, this);
    }

}
