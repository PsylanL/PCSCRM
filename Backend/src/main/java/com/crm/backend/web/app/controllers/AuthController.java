package com.crm.backend.web.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crm.backend.web.app.dao.UserDao;
import com.crm.backend.web.app.models.User;
import com.crm.backend.web.app.utils.JWTUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
	private UserDao userDao;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("/login")
    public String loginUser (@RequestBody User user) {
        User userVerified = userDao.getUserByCredentials(user);

        if(userVerified != null){
            return jwtUtil.create(userVerified.getId(), userVerified.getMail());
        }
        return "fail";
    }
}
