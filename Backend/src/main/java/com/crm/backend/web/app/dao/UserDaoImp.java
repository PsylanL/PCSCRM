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

    //Retorna lista con los usuarios del sistema
    @SuppressWarnings("unchecked")
    @Override
    public java.util.List<User> List() {
        String query = "from User";
        return entityManager.createQuery(query).getResultList();
    }

    //Método retorna el tipo de usuario
	@SuppressWarnings("unchecked")
	@Override
	public List<User> returnType(String id) {
		String query = "Select type from User Where Id = ".concat(id);
		List<User> user = entityManager.createQuery(query).getResultList();
		return user;
	}

    //Método para buscar un usuario en la base de datos
	@SuppressWarnings("unchecked")
	@Override
	public List<User> returnUser(String id) {
		String query = "from User Where Id = ".concat(id);
		return entityManager.createQuery(query).getResultList();
	}

    //Método para obtener las credenciales de un usuarios con el mail y verificación contraseña (Argon para la encriptación)
	@SuppressWarnings("unchecked")
    @Override
    public User getUserByCredentials(User user) {
        String query = "From User Where mail = :mail";
        List<User> lista = entityManager.createQuery(query)
                            .setParameter("mail", user.getMail())
                            .getResultList();

        if(lista.isEmpty()){
            return null;
        }

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if(argon2.verify(lista.get(0).getPassword(), user.getPassword())){
            return lista.get(0);
        }  
        return null;      
    }

    //Método para eliminar un usario del sistema con el id
    @SuppressWarnings("unchecked")
    @Override
    public String deleteUser(String id) {
        String query = "from User Where Id = ".concat(id);
		List<User> userList = entityManager.createQuery(query).getResultList();
        try {
            entityManager.remove(userList.get(0));
            return "Usuario eliminado satisfactoriamente";
        } catch (Exception e) {
            return "el usuario no fue eliiminado";
        }
    }

    @Override
    public void editUser(User user) {
        entityManager.merge(user);
    }

    @SuppressWarnings("unchecked")
    @Override
    public int consulta() {
        String query = " from User";
		List<User> resulList = entityManager.createQuery(query).getResultList();

        int count = 0;
        for (User user : resulList) {
            count++;
        };
       
        return count;
        
    }
}
