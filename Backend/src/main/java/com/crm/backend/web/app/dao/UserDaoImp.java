package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.User;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

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

	@SuppressWarnings("unchecked")
    @Override
    public boolean login(User user) {
        String query = "From User Where mail = :mail";
        List<User> lista = entityManager.createQuery(query)
                            .setParameter("mail", user.getMail())
                            .getResultList();

        if(lista.isEmpty()){
            return false;
        }

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        return argon2.verify(lista.get(0).getPassword(), user.getPassword());
        
    }
}
