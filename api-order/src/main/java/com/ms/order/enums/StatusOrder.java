package com.ms.order.enums;

import lombok.Getter;

@Getter
public enum StatusOrder {
    Pendente("1", "Pedido Pendente de Pagamento"),
    Efetuado("2", "Pedido Pagamento Efetuado"),
    Retirada("3", "Pedido Aguardando Retirada"),
    Entregue("4", "Pedido Entregue"),
    Finalizado("5", "Pedido Finalizado"),
    Incorreto("6", "Pedido Incorreto");

    private  String id;
    private  String name;

    StatusOrder(String id, String name) {
        this.id = id;
        this.name = name;
    }

}
