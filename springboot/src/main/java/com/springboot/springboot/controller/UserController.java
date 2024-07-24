package com.springboot.springboot.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springboot.entity.AdminUsers;
import com.springboot.springboot.entity.Books;
import com.springboot.springboot.repository.AdminUsersRepo;
import com.springboot.springboot.repository.BooksRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private AdminUsersRepo adminUsersRepo;

    @Autowired
    private BooksRepo booksRepo;

    @PostMapping("/adminLogin")
    public Boolean adminLogin(@RequestBody AdminUsers adminUsers)
    {
        String email = adminUsers.getEmail();
        String password = adminUsers.getPassword();
        List<AdminUsers>li = adminUsersRepo.adminLogin(email, password);
        if(li.size()>0)
        {
            return true;
        }
        return false;
    }

    @PostMapping("/addBook")
    public void addBooks(@RequestBody Books books)
    {
        booksRepo.save(books);    
    }

    @GetMapping("/getAllBooks")
    public List<Books> getAllBooks() {
        return booksRepo.findAll();
    }
    
}
