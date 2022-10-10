package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.Client;

//Interfaz que se llama desde el controlador 
public interface ClientDao {

    void register(Client client);

    List<Client> list();

    List<Client> search(String id);

    String deleteClient(String id);

    void edit(Client client);
    
    int consulta();
    
}
