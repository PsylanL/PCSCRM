package com.crm.backend.web.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "extract")
public class Extract {
    
    @Id
    @Column(name = "id")
    @Getter @Setter
    private String id;

    @Column(name = "idserviceclient")
    @Getter @Setter
    private String idServiceClient;

    @Column(name = "idsupplier")
    @Getter @Setter
    private String idSupplier;

    @Column(name = "orderquantity")
    @Getter @Setter
    private int orderQuantity;

    @Column(name = "orderdate")
    @Getter @Setter
    private String orderDate;
}
