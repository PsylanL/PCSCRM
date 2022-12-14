package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.User;

//Interfaz que se llama desde el controlador
public interface UserDao {

    void register(User user);

    List<User> List();

    List<User> returnType(String id);

	List<User> returnUser(String id);

    User getUserByCredentials(User user);

    String deleteUser(String id);
    
    void editUser(User user);

    int consulta();
}
