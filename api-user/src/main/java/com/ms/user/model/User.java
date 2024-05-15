package com.ms.user.model;

import com.ms.user.dto.UserDTO;
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
@Document(collection = "users")
public class User implements Serializable {

    @Id
    private String id;
    private String name;
    private String username;
    private String password;
    private String email;
    private String created;
    private String updated;
    private String registryUser;


    public User (UserDTO userDTO){
        BeanUtils.copyProperties(userDTO, this);
    }
    public User() {
        super();
    }
}

