package com.springboot.springboot.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class CheckOut {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String memberId;
    private String memberName;
    private String bookId;
    private String bookName;
    private String bookAuthor;
    private LocalDate checkOutDate;
    private LocalDate checkInDate;
    private String status;



}
