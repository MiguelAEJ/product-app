package com.miguel.productos.service;

import com.miguel.productos.model.Product;
import com.miguel.productos.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    // Constructor dependency injection (recommended over field @Autowired)
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAll() {
        return repository.findAll();
    }

    public Product getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    public Product create(Product product) {
        return repository.save(product);
    }

    public Product update(Long id, Product newData) {
        Product existing = getById(id);
        existing.setName(newData.getName());
        existing.setPrice(newData.getPrice());
        existing.setStock(newData.getStock());
        return repository.save(existing);
    }

    public void delete(Long id) {
        Product existing = getById(id);
        repository.delete(existing);
    }

    public List<Product> getLowStock(int limit) {
        return repository.findByStockLessThan(limit);
    }
}