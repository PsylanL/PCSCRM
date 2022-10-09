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

import com.crm.backend.web.app.dao.UserDao;
import com.crm.backend.web.app.models.User;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserDao userDao;

	//Metodo que se llama al ejecutar request desde front
	@PostMapping("/register")
	public void registerUser (@RequestBody User user) {
		Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
		String hash = argon2.hash(1, 1024, 1, user.getPassword()); //Encriptación contraseña
		user.setPassword(hash);
		userDao.register(user);
	}

	//Metodo que se llama al ejecutar request desde front
	@GetMapping("/list")
	public List<User> listUsers (){
		return userDao.List();
	}

		
	//Metodo que se llama al ejecutar request desde front
	@GetMapping("/type/{id}")
	public List<User> returnType (@PathVariable String id) {
		return userDao.returnType(id);
	}
	
	//Metodo que se llama al ejecutar request desde front y recibe un parametro id(Para buscar usuario)
	@GetMapping("/search/{id}")
	public List<User> returnUser (@PathVariable String id) {
		return userDao.returnUser(id);
	}

	//Metodo que se llama al ejecutar request desde front y recibe un parametro id(Para Eliminar usuario)
	@DeleteMapping("/delete/{id}")
	public String deleteUser (@PathVariable String id){
		return userDao.deleteUser(id);
	}

	@PostMapping("/edit")
    public void editUser (@RequestBody User user){
        userDao.editUser(user);
    }
}
