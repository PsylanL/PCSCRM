package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crm.backend.web.app.dao.ClientDao;
import com.crm.backend.web.app.models.Client;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    
    @Autowired
    ClientDao clientDao;

    //Metodo que se llama al ejecutar request desde front
    @PostMapping("/register")
    public void registerClient (@RequestBody Client client) {
        clientDao.register(client);
    }

    //Metodo que se llama al ejecutar request desde front
    public List<Client> list (){
        return clientDao.list();
    }

    @PostMapping
    public List<Client> search (String id){
        return clientDao.search(id);
    }

}
