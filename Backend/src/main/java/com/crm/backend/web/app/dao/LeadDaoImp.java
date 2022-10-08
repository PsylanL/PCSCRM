package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.Lead;

//implementacion de la interfaz
@Transactional
@Repository
public class LeadDaoImp implements LeadDao {

    //variable que ejecuta comandos y queries de sql
    @PersistenceContext
	private EntityManager entityManager;

    //Método para registar un cliente potencial (Merge inserta)
    @Override
    public void register(Lead lead) {
        entityManager.merge(lead);
    }

    //Método para listar los clientes potenciales
    @SuppressWarnings("unchecked")
    @Override
    public List<Lead> list() {
        String query = "from Lead";
        return entityManager.createQuery(query).getResultList();
    }

    //Método para buscar  un cliente potencial por medio del id
    @SuppressWarnings("unchecked")
    @Override
    public List<Lead> search(String id) {
        String query = "from Lead Where Id = ".concat(id);
		return entityManager.createQuery(query).getResultList();
    }

    //Método para buscar  un cliente potencial por medio del id
    @SuppressWarnings("unchecked")
    @Override
    public String deleteLead(String id) {
        String query = "from Lead Where Id = ".concat(id);
		List<Lead> leadList = entityManager.createQuery(query).getResultList();
        try {
            entityManager.remove(leadList.get(0));
            return "Cliente Potencial eliminado satisfactoriamente";
        } catch (Exception e) {
            return "El cliente Potencial no fue eliminado";
        }
    }

    @Override
    public void editLead(Lead lead) {
        System.out.println("Hola: " + lead.getId());
        entityManager.merge(lead);
    }

    
    
}