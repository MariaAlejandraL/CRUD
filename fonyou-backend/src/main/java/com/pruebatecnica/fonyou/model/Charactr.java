package com.pruebatecnica.fonyou.model;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Charactr {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String role;
    private String description;
    private  String date;

    public Charactr() {
    }

    public Charactr(String name, String role, String description, String date, String emoji) {
        this.name = name;
        this.role = role;
        this.description = description;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


}
