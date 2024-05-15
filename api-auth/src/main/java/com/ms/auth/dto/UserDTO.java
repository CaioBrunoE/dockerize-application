package com.ms.auth.dto;

import com.ms.auth.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements Serializable {

    @Id
    private String id;
    private String name;
    private String email;
    private String username;

    public UserDTO (User entity){
        BeanUtils.copyProperties(entity, this);
    }

}
