package com.crm.backend.web.app.dao;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.Client;

//implementacion de la interfaz ClientDao
@Transactional
@Repository
public class ClientDaoImp implements ClientDao {

    //variable que ejecuta comandos y queries de sql
    @PersistenceContext
	private EntityManager entityManager;

    //Método para registrar al cliente en la base de datos (Merge inserta el cliente)
    @Override
    public void register(Client client) {
        entityManager.merge(client);
    }

    //Método para listar clientes 
    @SuppressWarnings("unchecked")
    @Override
    public List<Client> list() {
        String query = "from Client";
        return entityManager.createQuery(query).getResultList();
    }

    //Método para buscar cliente
    @SuppressWarnings("unchecked") //Suprime las advertencias sobre operaciones genericas no verificadas
    @Override
    public List<Client> search(String id) {
        String query = "from Client Where Id = ".concat(id);
		return entityManager.createQuery(query).getResultList();
    }

    //Método para eliminar un cliente
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

    @Override
    public void edit(Client client) {
        entityManager.merge(client);
    }
    
    @SuppressWarnings("unchecked")
    @Override
    public int consulta() {
        String query = " from Client";
		List<Client> resulList = entityManager.createQuery(query).getResultList();

        int count = 0;
        for (Client client : resulList) {
            count++;
        };
       
        return count;
        
    }

}
