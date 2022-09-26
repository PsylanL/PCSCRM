package com.crm.backend.web.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "user")
public class User {

    @Id
    @Column(name = "id")
    @Getter @Setter
    private String id;

    @Column(name = "name")
    @Getter @Setter
    private String name;

    @Column(name = "cellphone")
    @Getter @Setter
    private String cellPhone;

    @Column(name = "adress")
    @Getter @Setter
    private String adress;

    @Column(name = "mail")
    @Getter @Setter
    private String mail;

    @Column(name = "password")
    @Getter @Setter
    private String password;

    @Column(name = "type")
    @Getter @Setter
    private String type;
}
