package com.miguel.productos.repository;

import com.miguel.productos.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // TODO: declare this method (no body, it's an interface).
    // Spring Data JPA generates the SQL query automatically
    // from the method name.
    List<Product> findByStockLessThan(int stock);
}