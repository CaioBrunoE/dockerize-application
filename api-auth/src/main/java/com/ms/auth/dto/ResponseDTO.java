package com.ms.auth.dto;

import com.ms.auth.model.User;

public record ResponseDTO (UserDTO user, String token) {
}
