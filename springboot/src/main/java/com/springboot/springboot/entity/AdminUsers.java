package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdminUsers {
    @Id
    private String librarianId;
    private String librarianName;
    private String password;
    private String email;
    private String phone;
    public AdminUsers() {
    }
    public AdminUsers(String librarianId, String librarianName, String password, String email, String phone) {
        this.librarianId = librarianId;
        this.librarianName = librarianName;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
    public String getLibrarianId() {
        return librarianId;
    }
    public void setLibrarianId(String librarianId) {
        this.librarianId = librarianId;
    }
    public String getLibrarianName() {
        return librarianName;
    }
    public void setLibrarianName(String librarianName) {
        this.librarianName = librarianName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    
}
