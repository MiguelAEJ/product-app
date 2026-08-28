package com.miguel.productos;

import com.miguel.productos.model.Product;
import com.miguel.productos.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepository repository;

    public DataLoader(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.save(new Product("Laptop", 899.99, 15));
        repository.save(new Product("Wireless mouse", 19.99, 3));
        repository.save(new Product("Mechanical keyboard", 59.99, 8));
    }
}