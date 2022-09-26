package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.User;

public interface UserDao {

    void register(User user);

    List<User> List();

    java.util.List<User> ListClient();
    
}
