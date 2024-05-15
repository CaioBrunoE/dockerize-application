package com.category.category.domain.entity;

import com.category.category.domain.dto.CategoryDTO;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Data
@AllArgsConstructor
@Builder
@Document(collection = "categories")
public class Category implements Serializable {

    @Id
    private String id;
    private String name;
    private int type;
    private String image;
    private String created;
    private String updated;

    public Category (CategoryDTO categoryDTO){
        BeanUtils.copyProperties(categoryDTO, this);
    }
    public Category() {
        super();
    }

}
