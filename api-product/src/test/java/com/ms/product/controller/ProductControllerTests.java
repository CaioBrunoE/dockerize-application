package com.ms.product.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ms.product.ProductApplicationTests;
import com.ms.product.dto.ProductDTO;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;

@SpringBootTest
@ActiveProfiles("test")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ProductControllerTests extends ProductApplicationTests {

    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private MockMvc mockMvc;

    private String id;
    private String name;

    @Autowired
    private ProductController controller;

    @BeforeEach
    public void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
        this.id = "65f346c11ac3d257aed346f9";
        this.name = "Jardineira-P";
    }

    @Test
    @Order(1)
    public void testCreate() throws Exception {
        log.info("testCreate");
        ProductDTO productDTO = new ProductDTO(id, "Jardineira-P", "Floreira", new BigDecimal(20.50), "Jardinagem", "VasePlant", "Em estoque", "Terra Flor", "vaso", null, null);
        this.mockMvc.perform( MockMvcRequestBuilders
                        .post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(productDTO))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                .andReturn();
    }

    @Test
    @Order(2)
    public void testFindAll() throws Exception {
        log.info("testFindAll");
        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/products"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty());
    }

    @Test
    @Order(3)
    public void testFindById() throws Exception {
        log.info("testFindById");
        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/products/getId/" + id))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());;
    }
    @Test
    @Order(4)
    public void testFindByName() throws Exception {
        log.info("testFindByName");
        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/products/getName/" + name))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").exists());;
    }

    @Test
    @Order(5)
    public void testUpdate() throws Exception {
        log.info("testUpdate");
        this.mockMvc.perform( MockMvcRequestBuilders
                        .put("/api/products/" + id)
                        .content(asJsonString(new ProductDTO(null, "Jardineira-G-UPDATE", "Floreira", new BigDecimal(20.50), "Jardinagem", "VasePlant", "Em estoque", "Terra Flor","vaso", null, null)))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
    }

    @Test
    @Order(6)
    public void testDelete() throws Exception {
        log.info("testDelete");
        this.mockMvc.perform( MockMvcRequestBuilders
                        .delete("/api/products/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").doesNotExist());
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}