package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.User;

@Repository
@Transactional
public class UserDaoImp implements UserDao{

    //variable que ejecuta comandos y queries de sql
    @PersistenceContext
	private EntityManager entityManager;

    @Override
    public void register(User user) {
        entityManager.merge(user);
    }

    //Retorna lista
    @SuppressWarnings("unchecked")
    @Override
    public java.util.List<User> List() {
        String query = "from User";
        return entityManager.createQuery(query).getResultList();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> ListClient() {
        String query = "from User Where Type = 'Client'";
		return entityManager.createQuery(query).getResultList();
    }

	@SuppressWarnings("unchecked")
	@Override
	public List<User> returnType(String id) {
		String query = "Select type from User Where Id = ".concat(id);
		List<User> user = entityManager.createQuery(query).getResultList();
		return user;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> returnUser(String id) {
		String query = "from User Where Id = ".concat(id);
		return entityManager.createQuery(query).getResultList();
	}
    
}
