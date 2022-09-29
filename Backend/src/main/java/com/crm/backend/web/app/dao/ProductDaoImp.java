package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

@Transactional
@Repository
public class ProductDaoImp implements ProductDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List list() {
		String query = "from Product";
		return entityManager.createQuery(query).getResultList();
	}

}
