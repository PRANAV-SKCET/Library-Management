package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.MemberShip;

public interface MemberShipRepo extends JpaRepository<MemberShip,String>{
    
}
