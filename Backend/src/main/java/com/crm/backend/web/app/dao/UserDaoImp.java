package com.crm.backend.web.app.dao;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.User;

@Repository
@Transactional
public class UserDaoImp implements UserDao{

    @PersistenceContext
	private EntityManager entityManager;

    @Override
    public void register(User user) {
        entityManager.merge(user);
    }

    @SuppressWarnings("unchecked")
    @Override
    public java.util.List<User> List() {
        String query = "from User";
		return entityManager.createQuery(query).getResultList();
    }

    @SuppressWarnings("unchecked")
    @Override
    public java.util.List<User> ListClient() {
        String query = "from User Where Type = 'Client'";
		return entityManager.createQuery(query).getResultList();
    }
    
}
