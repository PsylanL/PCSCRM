package com.crm.backend.web.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.crm.backend.web.app.models.Extract;

@Transactional
@Repository
public class ExtractDaoImp implements ExtractDao{
    
    @PersistenceContext
    private EntityManager entityManager;


    @SuppressWarnings("unchecked")
    @Override
    public List<Extract> list(){
        String query = "from Extract";
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    public void register(Extract extract) {
        // TODO Auto-generated method stub
        
    }
}
