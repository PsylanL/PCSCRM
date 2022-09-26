package com.crm.backend.web.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "inventory")
public class Inventory {
    
    @Id
    @Column (name = "id")
    @Getter @Setter
    private String id;
    
    @Column (name = "orderinventory")
    @Getter @Setter
    private String orderInventory;
}
