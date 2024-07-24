package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.Books;

public interface BooksRepo extends JpaRepository<Books,String>{
    
}
