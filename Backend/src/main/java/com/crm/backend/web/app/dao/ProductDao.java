package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.Product;


//Interfaz que se llama desde el controlador
public interface ProductDao {

    void register(Product product);
    
	List<Product> list();
	
	List<Product> search(String id);
	
	String deleteProduct(String id);

	void edit(Product product);


}
