package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.Client;

//implementacion de la interfaz
@Transactional
@Repository
public class ClientDaoImp implements ClientDao {

    //variable que ejecuta comandos y queries de sql
    @PersistenceContext
	private EntityManager entityManager;

    @Override
    public void register(Client client) {
        entityManager.merge(client);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Client> list() {
        String query = "from Client";
        return entityManager.createQuery(query).getResultList();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Client> search(String id) {
        String query = "from Client Where Id = ".concat(id);
		return entityManager.createQuery(query).getResultList();
    }

    @SuppressWarnings("unchecked")
    @Override
    public String deleteClient(String id) {
        String query = "from Client Where Id = ".concat(id);
		List<Client> clientList = entityManager.createQuery(query).getResultList();
        try {
            entityManager.remove(clientList.get(0));
            return "Cliente eliminado satisfactoriamente";
        } catch (Exception e) {
            return "el cliente no fue eliminado";
        }
    }
    
}
