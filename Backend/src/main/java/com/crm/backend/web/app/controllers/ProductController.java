package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.crm.backend.web.app.dao.ProductDao;
import com.crm.backend.web.app.models.Product;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	 ProductDao productDao;
	
	//Metodo que se llama al ejecutar request desde front
    @PostMapping("/register")
    public void registerProduct (@RequestBody Product product) {
        productDao.register(product);
    }
	
	//Metodo que se llama al ejecutar request desde front
    @GetMapping("/list")
	public List<Product> list () {
		return productDao.list();
	}
	
	@PostMapping("/search/{id}")
    public List<Product> search (@PathVariable String id){
        return productDao.search(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct (@PathVariable String id){
        return productDao.deleteProduct(id);
    }

}
