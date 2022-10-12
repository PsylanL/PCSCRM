package com.crm.backend.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.crm.backend.web.app.dao.ExtractDao;
import com.crm.backend.web.app.models.Extract;

@RestController
@RequestMapping("/api/extract")
public class ExtractController {
	
	@Autowired
	 ExtractDao extractDao;
	
	//Metodo que se llama al ejecutar request desde front
    @PostMapping("/register")
    public void registerProduct (@RequestBody Extract extract) {
        extractDao.register(extract);
    }
	
	//Metodo que se llama al ejecutar request desde front
    @GetMapping("/list")
	public List<Extract> list () {
		return extractDao.list();
	}

	@DeleteMapping("/delete/{id}")
    public String deleteOrder (@PathVariable String id){
        return extractDao.deleteOrder(id);
    }

	@PostMapping("/edit")
    public void edit (@RequestBody Extract  extract){
      extractDao.edit(extract);
    }


}
