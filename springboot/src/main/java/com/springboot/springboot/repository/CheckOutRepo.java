package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.CheckOut;

public interface CheckOutRepo extends JpaRepository<CheckOut,Long>{
    @Modifying
    @Transactional
    @Query(value = "SELECT * from check_out where book_id=?1 and member_id=?2", nativeQuery = true)
    public List<CheckOut> findByMobileNumberAndBookId(String bookId,String memberId);
    
}
