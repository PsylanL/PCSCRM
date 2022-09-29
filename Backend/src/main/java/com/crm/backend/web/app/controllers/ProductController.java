package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crm.backend.web.app.dao.ProductDao;

@RestController
@RequestMapping("api/product")
public class ProductController {
	
	@Autowired
	private ProductDao productDao;
	
	@RequestMapping("/list")
	public List list () {
		return productDao.list();
	}
}
