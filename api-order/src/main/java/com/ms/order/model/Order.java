package com.ms.order.model;

import com.ms.order.dto.OrderDTO;
import com.ms.order.dto.OrderItemDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
@Document(collection = "orders")
public class Order implements Serializable {
    @Id
    private String id;
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
    public Order(OrderDTO orderDTO){
        BeanUtils.copyProperties(orderDTO, this);
    }

    public Order() {
        super();
    }

}
