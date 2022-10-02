package com.crm.backend.web.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crm.backend.web.app.dao.UserDao;
import com.crm.backend.web.app.models.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
	private UserDao userDao;

    @PostMapping("/login")
    public String loginUser (@RequestBody User user) {
        if (userDao.login(user)){
            return "ok";
        }
        return "fail";
    }
}
