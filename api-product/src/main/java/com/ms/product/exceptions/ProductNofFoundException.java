package com.ms.product.exceptions;

public class ProductNofFoundException extends RuntimeException {
    public ProductNofFoundException(String message) {
        super(message);
    }
}
