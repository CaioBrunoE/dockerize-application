package com.category.category.domain.entity;

public enum TypeCategory {

    SERVICE(1),
    PRODUCT(2);

    private int value;

    TypeCategory(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

}
