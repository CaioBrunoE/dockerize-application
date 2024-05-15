package com.ms.order.dto;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;

public class OrderItemConverter {

    public static List<OrderItemDTO> convertStringToOrderItems(String orderItemsJson) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(orderItemsJson, new TypeReference<List<OrderItemDTO>>(){});
    }
}
