package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.Lead;

//Interfaz que se llama desde el controlador
public interface LeadDao {

    void register(Lead lead);

    List<Lead> list();

    List<Lead> search(String id);

    String deleteLead(String id);

    
}