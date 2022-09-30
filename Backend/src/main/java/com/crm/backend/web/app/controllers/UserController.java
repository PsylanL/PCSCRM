package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crm.backend.web.app.dao.UserDao;
import com.crm.backend.web.app.models.User;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserDao userDao;

	//Metodo que se llama al ejecutar request desde front
	@PostMapping("/register")
	public void registerUser (@RequestBody User user) {
		userDao.register(user);
	}

	//Metodo que se llama al ejecutar request desde front
	@GetMapping("/list")
	public List<User> listUsers (){
		return userDao.List();
	}

	//Metodo que se llama al ejecutar request desde front
	@GetMapping("/list/client")
	public List<User> listClient () {
		return userDao.ListClient();
	}
	
	//Metodo que se llama al ejecutar request desde front
	@GetMapping("/type/{id}")
	public List<User> returnType (@PathVariable String id) {
		return userDao.returnType(id);
	}
	
	//Metodo que se llama al ejecutar request desde front
	@GetMapping("/search/{id}")
	public List<User> returnUser (@PathVariable String id) {
		return userDao.returnUser(id);
	}
}
