package com.crm.backend.web.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @Column (name = "id")
    @Getter @Setter
    private String id;

    @Column(name = "name")
    @Getter @Setter
    private String name;

    @Column(name = "idinventory")
    @Getter @Setter
    private String idInventory;

    @Column(name = "urlimg")
    @Getter @Setter
    private String urlImg;
}
