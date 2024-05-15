package com.ms.order.controller;

import com.ms.order.dto.OrderDTO;
import com.ms.order.dto.StatusOrderDTO;
import com.ms.order.exceptions.OrderNotFoundException;
import com.ms.order.exceptions.ServiceException;
import com.ms.order.services.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService service;

    @Autowired
    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() {
        try {
            List<OrderDTO> orders = service.findAll();
            if (orders.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(orders);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @PostMapping
    public ResponseEntity<OrderDTO> create(@RequestBody @Valid OrderDTO entity) {
        try {
            OrderDTO createdOrder = service.create(entity);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value="/getId/{id}")
    public ResponseEntity<OrderDTO> findById(@PathVariable String id) {
        try {
            OrderDTO Order = service.findById(id);
            return ResponseEntity.ok(Order);
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();

        }
    }

    @GetMapping(value="/getClient/{client}")
    public ResponseEntity<OrderDTO> findByClient(@PathVariable String client) {
        try {
            OrderDTO order = service.findByClient(client);
            if (client != null) {
                return ResponseEntity.ok(order);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ServiceException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PutMapping(value="/{id}")
    public ResponseEntity<OrderDTO> update(@PathVariable String id, @Valid @RequestBody OrderDTO orderDTO) {
        try {
            OrderDTO updatedClient = service.update(id, orderDTO);
            return ResponseEntity.ok(updatedClient);
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        try {
            service.delete(id);
            return ResponseEntity.ok().build();
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/liststausorders")
    public ResponseEntity<List<StatusOrderDTO>> statusOrderlist() {
        try {
            return ResponseEntity.ok(service.listStatusOrder());
        } catch (ServiceException e) {
            throw new OrderNotFoundException("Lista vazia");
        }
    }
}
