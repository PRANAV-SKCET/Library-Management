package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.CheckOut;

public interface CheckOutRepo extends JpaRepository<CheckOut,String>{
    
}
