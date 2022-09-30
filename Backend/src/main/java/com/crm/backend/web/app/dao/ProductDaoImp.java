package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.User;

@Transactional
@Repository
public class ProductDaoImp implements ProductDao{

	//variable que ejecuta comandos y queries de sql
	@PersistenceContext
	private EntityManager entityManager;
	
	
    @SuppressWarnings("unchecked")
	@Override
	public List<User> list() {
		String query = "from Product";
		return entityManager.createQuery(query).getResultList();
	}

}
