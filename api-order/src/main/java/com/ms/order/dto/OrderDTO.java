package com.ms.order.dto;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ms.order.model.Order;
import com.ms.order.validation.ValidDateFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO implements Serializable {

    private String id;
    @ValidDateFormat(message = "The order date must be in day, month, and year format with 4 digits for year")
    private String orderDate;
    private String client;
    private List<OrderItemDTO> orderItems;
    private String orderStatus;
    private String priceItem;
    private String quantityItems;
    private String orderTotal;
    private String paymentMethod;
    private String shippingMethod;
    private String paymentInformation;
    private String discountsAndFees;
    private String orderNotes;
    private String created;
    private String updated;
    private String registryUser;
    private String status;
    public OrderDTO(Order entity){
        BeanUtils.copyProperties(entity, this);
    }

    public String getOrderItemsAsString() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(orderItems);
    }
}
