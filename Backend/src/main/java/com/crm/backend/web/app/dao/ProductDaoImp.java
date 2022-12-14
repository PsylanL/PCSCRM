package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.Product;

@Transactional
@Repository
public class ProductDaoImp implements ProductDao{

	//variable que ejecuta comandos y queries de sql
	@PersistenceContext
	private EntityManager entityManager;
	
	
    //Método para listar productos
    @SuppressWarnings("unchecked")
	@Override
	public List<Product> list() {
		String query = "from Product";
		return entityManager.createQuery(query).getResultList();
	}

    //Método para registrar productos
    @Override
    public void register(Product product) {
        entityManager.merge(product);
    }

    //Método para buscar recibiendo como parámetro el id
    @SuppressWarnings("unchecked")
    @Override
    public List<Product> search(String id) {
        String query = "from Product Where Id = ".concat(id);
        return entityManager.createQuery(query).getResultList();
    }
    
    //Método para eliminar recibiendo como parámetro el id
    @SuppressWarnings("unchecked")
    @Override
    public String deleteProduct(String id) {
       String query= "from Product Where Id = ".concat(id);
       List<Product> productList = entityManager.createQuery(query).getResultList();
       try {
               entityManager.remove(productList.get(0));
               return "El producto fue eliminado correctamente";
           } catch(Exception e){
               return "El producto no fue eliminado";
       }
    }

    @Override
    public void edit(Product product) {
        entityManager.merge(product);
    }

    @SuppressWarnings("unchecked")
    @Override
    public int consulta() {
        String query = " from Product";
		List<Product> resulList = entityManager.createQuery(query).getResultList();

        int count = 0;
        for (Product product : resulList) {
            count++;
        };
       
        return count;
        
    }

}
