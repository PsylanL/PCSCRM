package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

	@PostMapping("/register")
	public void registerUser (@RequestBody User user) {
		userDao.register(user);
	}

	@GetMapping("/list")
	public List<User> listUsers (){
		return userDao.List();
	}

	@GetMapping("/list/client")
	public List<User> listClient () {
		return userDao.ListClient();
	}


}
