package com.ms.user.dto;


import com.ms.user.model.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements Serializable {


    private String id;

    @NotBlank
    @Pattern(regexp = "^[A-Z][a-z]+\s[A-Z][a-z]+$",
            message = "O nome completo deve conter: " +
                    "Nome e sobrenome com iniciais em Letra Maiúscula!")
    private String name;

    @NotBlank
    @Pattern(regexp = "^(?=.*[A-Z])(?!.*\\d)(?!.*\\s).{7}$",
            message = "O username deve conter: " +
                    "O username com 7 letras, apenas uma letra maiúscula, sem espaços em branco ou números!")
    private String username;


    @NotBlank
    @Pattern(regexp = "\\d{6}", message = "A senha deve conter: " +
            "No formato: XXXXXX (Apenas números)" + "Devem ser inseridos 6 números")
    private String password;


    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String registryUser;

    private String created;

    private String updated;


    public UserDTO (User entity){
        BeanUtils.copyProperties(entity, this);
    }
}
