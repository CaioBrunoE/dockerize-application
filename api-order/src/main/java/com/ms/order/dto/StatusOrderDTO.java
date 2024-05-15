package com.ms.order.dto;

import com.ms.order.enums.StatusOrder;
import lombok.Data;

@Data
public class StatusOrderDTO {

    private  String id;
    private  String name;

    public StatusOrderDTO(StatusOrder statusOrder) {
        this.id = statusOrder.getId();
        this.name = statusOrder.getName();
    }



}
