package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.springboot.springboot.entity.MemberShip;

import jakarta.transaction.Transactional;

public interface MemberShipRepo extends JpaRepository<MemberShip,String>{
    
    @Modifying
    @Transactional
    @Query(value = "SELECT * from member_ship where status=?1", nativeQuery = true)
    public List<MemberShip> getPendingMembership(String status);

    @Modifying
    @Transactional
    @Query(value = "SELECT * from member_ship order by count desc", nativeQuery = true)
    public List<MemberShip> getMembers();

    @Modifying
    @Transactional
    @Query(value = "UPDATE member_ship SET status=?1,member_id=?3 where mobile_number=?2", nativeQuery = true)
    public void approveMembership(String status,String mobileNumber,String memberId);

    @Modifying
    @Transactional
    @Query(value = "SELECT * FROM member_ship where member_id=?1 ", nativeQuery = true)
    public List<MemberShip> getId(String memberId);
}
