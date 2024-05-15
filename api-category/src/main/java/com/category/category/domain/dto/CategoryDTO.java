package com.category.category.domain.dto;

import com.category.category.domain.entity.Category;
import com.category.category.domain.entity.TypeCategory;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO implements Serializable {

    private String id;
    @NotBlank(message = "Por favor insira o nome da categoria!")
    @Pattern(regexp = "^[a-zA-Z]{3,16}$", message = "Insira os dados corretamente!")
    private String name;

    @Valid
    private int type;

    @NotNull
    private String image;

    private String created;
    private String updated;

    public CategoryDTO(Category category) {
        BeanUtils.copyProperties(category, this);
    }

}
