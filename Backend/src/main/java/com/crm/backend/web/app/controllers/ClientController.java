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
    @GetMapping("/list")
    public List<Client> list (){
        return clientDao.list();
    }

    @PostMapping("/search/{id}")
    public List<Client> search (@PathVariable String id){
        return clientDao.search(id);
    }

    @DeleteMapping("/delete/{id}")
	public String deleteClient (@PathVariable String id){
		return clientDao.deleteClient(id);
	}

}
