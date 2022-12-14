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

import com.crm.backend.web.app.dao.LeadDao;
import com.crm.backend.web.app.models.Lead;

@RestController
@RequestMapping("/api/lead")
public class LeadController {
    
    @Autowired
    LeadDao lDao;

    //Metodo que se llama al ejecutar request desde front
    @PostMapping("/register")
    public void registerClient (@RequestBody Lead lead) {
        lDao.register(lead);
    }

    //Metodo que se llama al ejecutar request desde front
    @GetMapping("/list")
    public List<Lead> list (){
        return lDao.list();
    }

    //Metodo que se llama al ejecutar request desde front y recibe parametro id (Para buscar Cliente Potencial)
    @PostMapping
    public List<Lead> search (String id){
        return lDao.search(id);
    }
    
    //Metodo que se llama al ejecutar request desde front y recibe parametro id(Para eliminar Cliente)
    @DeleteMapping("/delete/{id}")
	public String deleteLead (@PathVariable String id){
		return lDao.deleteLead(id);
	}

    @PostMapping("/edit")
    public void editLead (@RequestBody Lead lead){
        lDao.editLead(lead);
    }

     @GetMapping("/consulta")
    public  int consulta(){
        return lDao.consulta();
    }
}
