package com.ms.product.services;

import com.ms.product.dto.ProductDTO;
import com.ms.product.exceptions.ProductNofFoundException;
import com.ms.product.exceptions.ServiceException;
import com.ms.product.model.Product;
import com.ms.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class ProductService {

    @Autowired
    ProductRepository repository;

    public List<ProductDTO> findAll() throws ServiceException {
        List<Product> list = repository.findAll();
        if (list.isEmpty()) {
            throw new ProductNofFoundException("No products found");
        }
        return list.stream().map(ProductDTO::new).toList();
    }

    @Transactional
    public ProductDTO create(ProductDTO productDTO) throws ServiceException {
        Product entity = new Product(productDTO);
        entity.setRegistryUser(productDTO.getRegistryUser());
        entity.setCreated(LocalDateTime.now().toString());
        entity.setQuantity(1);
        repository.save(entity);
        return new ProductDTO(entity);
    }

    public ProductDTO findById(String id) throws ServiceException {
        return repository.findById(id)
                .map(ProductDTO::new)
                .orElseThrow(() -> new ProductNofFoundException("Product not found with ID: " + id));
    }

    public ProductDTO findByName(String name) throws ServiceException {
        return repository.findByName(name)
                .map(ProductDTO::new)
                .orElseThrow(() -> new ProductNofFoundException("Product not found with name: " + name));
    }

    public List<ProductDTO> findByIdCategory(String idCategory) throws ServiceException {
        List<ProductDTO> productDTOList = repository.findByIdCategory(idCategory)
                .stream().map(ProductDTO::new)
                .collect(Collectors.toList());
        return productDTOList;
    }

    public List<ProductDTO> findByDiscount(String lesser, String greater) throws ServiceException {
        List<ProductDTO> productDTOList = repository.findByDiscountBetween(lesser, greater)
                .stream().map(ProductDTO::new)
                .collect(Collectors.toList());
        return productDTOList;
    }


    @Transactional
    public ProductDTO update(String id, ProductDTO productDTO) throws ServiceException {
        Optional<Product> optionalProduct = repository.findById(id);
        if (optionalProduct.isPresent()) {
            Product entity = optionalProduct.get();
            entity.setName(productDTO.getName());
            entity.setDescription(productDTO.getDescription());
            entity.setPrice(productDTO.getPrice());
            entity.setIdCategory(productDTO.getIdCategory());
            entity.setBrand(productDTO.getBrand());
            entity.setStock(productDTO.getStock());
            entity.setSupplier(productDTO.getSupplier());
            entity.setRegistryUser(productDTO.getRegistryUser());
            entity.setUpdated(LocalDateTime.now().toString());
            entity.setQuantity(1);


            repository.save(entity);
            return new ProductDTO(entity);
        } else {
            throw new ProductNofFoundException("Product not found with ID: " + id);
        }
    }

    public void delete(String id) throws ServiceException {
        if (!repository.existsById(id)) {
            throw new ProductNofFoundException("Product not found with ID: " + id);
        }
        repository.deleteById(id);
    }
}