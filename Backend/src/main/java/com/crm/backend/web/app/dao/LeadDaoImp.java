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

    @Override
    public void register(Lead lead) {
        entityManager.merge(lead);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Lead> list() {
        String query = "from lead";
        return entityManager.createQuery(query).getResultList();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Lead> search(String id) {
        String query = "from Lead Where Id = ".concat(id);
		return entityManager.createQuery(query).getResultList();
    }
    
}