package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.User;

//Interfaz que se llama desde el controlador
public interface ProductDao {

	List<User> list();

}
