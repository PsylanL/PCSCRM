package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.User;

public interface UserDao {

    void register(User user);

    List<User> List();

    List<User> ListClient();

    List<User> returnType(String id);

	List<User> returnUser(String id);
    
}