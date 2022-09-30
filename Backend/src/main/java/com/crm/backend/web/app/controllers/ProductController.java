package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crm.backend.web.app.dao.ProductDao;
import com.crm.backend.web.app.models.User;

@RestController
@RequestMapping("api/product")
public class ProductController {
	
	@Autowired
	private ProductDao productDao;
	
	//Metodo que se llama al ejecutar request desde front
	@RequestMapping("/list")
	public List<User> list () {
		return productDao.list();
	}
}
