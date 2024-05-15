package com.ms.auth.model;

import com.ms.auth.dto.UserDTO;
import lombok.*;
import org.springframework.beans.BeanUtils;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User implements Serializable {

    @Id
    private String id;
    private String name;
    private String email;
    private String username;
    private String password;
    private String role;
    public User (UserDTO userDTO){
        BeanUtils.copyProperties(userDTO, this);
    }

}
