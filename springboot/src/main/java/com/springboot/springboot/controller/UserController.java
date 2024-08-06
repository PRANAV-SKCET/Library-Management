package com.springboot.springboot.controller;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.hibernate.annotations.Check;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springboot.entity.AdminUsers;
import com.springboot.springboot.entity.Books;
import com.springboot.springboot.entity.CheckOut;
import com.springboot.springboot.entity.MemberShip;
import com.springboot.springboot.repository.AdminUsersRepo;
import com.springboot.springboot.repository.BooksRepo;
import com.springboot.springboot.repository.CheckOutRepo;
import com.springboot.springboot.repository.MemberShipRepo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private AdminUsersRepo adminUsersRepo;

    @Autowired
    private BooksRepo booksRepo;

    @Autowired
    private MemberShipRepo memberShipRepo;

    @Autowired
    private CheckOutRepo checkOutRepo;

    @PostMapping("/adminLogin")
    public Boolean adminLogin(@RequestBody AdminUsers adminUsers) {
        String email = adminUsers.getEmail();
        String password = adminUsers.getPassword();
        List<AdminUsers> li = adminUsersRepo.adminLogin(email, password);
        if (li.size() > 0) {
            return true;
        }
        return false;
    }

    @PostMapping("/addBook")
    public void addBooks(@RequestBody Books books) {
        booksRepo.save(books);
    }

    @GetMapping("/getAllBooks")
    public List<Books> getAllBooks() {
        return booksRepo.findAll();
    }

    @PostMapping("/newMember")
    public String newMember(@RequestBody MemberShip memberShip) {
        MemberShip memberShip2 = memberShipRepo.findById(memberShip.getMobileNumber()).orElse(null);
        if (memberShip2 == null) {
            memberShipRepo.save(memberShip);
            return "Request Submitted";
        } else {
            return "Mobile Number Already exists !!!";
        }
    }

    @GetMapping("/getPendingMembership")
    public List<MemberShip> getPendingMembership() {
        return memberShipRepo.getPendingMembership("Not Active");
    }

    @GetMapping("/getMembers")
    public List<MemberShip> getMembers() {
        return memberShipRepo.getMembers();
    }

    @PostMapping("/approveMembership")
    public void approveMember(@RequestParam("mobileNumber") String mobileNumber,
            @RequestParam("memberId") String memberId) {
        memberShipRepo.approveMembership("Active", mobileNumber, memberId);
    }

    @PostMapping("/deleteBook")
    public String deleteBook(@RequestParam("bookId") String bookId, @RequestParam("noOfBooks") int noOfBooks) {
        Books books = booksRepo.findById(bookId).orElse(null);
        if (books == null) {
            return "Book not found";
        }
        if (books.getNoOfBooks() < noOfBooks) {
            return "Available book is less than you have entered !!!";
        }
        if (books.getNoOfBooks() == noOfBooks) {
            booksRepo.deleteById(bookId);
        } else {
            int t = books.getNoOfBooks();
            t = t - noOfBooks;
            books.setNoOfBooks(t);

            int h = books.getBooksLeft();
            h = h - noOfBooks;
            books.setBooksLeft(h);
            if (h < 0) {
                return "Check-In the lost book";
            }
            booksRepo.save(books);
        }
        return "Book Removed";
    }

    @PostMapping("/verifyMember")
    public String verifyMember(@RequestParam("mobileNumber") String mobileNumber) {
        MemberShip memberShip = memberShipRepo.findById(mobileNumber).orElse(null);
        if (memberShip == null) {
            return "Member not found";
        }
        if (memberShip.getStatus().equals("Not Active")) {
            return "Member is not active";
        }
        return "Member Verified";
    }

    @GetMapping("/getMemberDetails")
    public MemberShip getMemberDetails(@RequestParam String mobileNumber) {
        return memberShipRepo.findById(mobileNumber).orElse(null);
    }

    @GetMapping("/getBookDetails")
    public Books getBookDetails(@RequestParam String bookId) {
        return booksRepo.findById(bookId).orElse(null);
    }

    @PostMapping("/checkout")
    public String checkout(@RequestBody CheckOut checkOut) {
        String bookId = checkOut.getBookId();
        Books books = booksRepo.findById(bookId).orElse(null);
        int f = books.getBooksLeft();
        f = f - 1;
        books.setBooksLeft(f);
        booksRepo.save(books);
        checkOutRepo.save(checkOut);

        String memId = checkOut.getMemberId();

        List<MemberShip>li=memberShipRepo.getId(memId);
        MemberShip memberShip = li.get(0);
        long count = memberShip.getCount();
        count = count + 1;
        memberShip.setCount(count);
        memberShipRepo.save(memberShip);
        
        return "Check-Out Successful";
    }

    @PostMapping("/checkIn")
    public String checkIn(@RequestParam String mobileNumber, @RequestParam String bookId) {
        MemberShip memberShip = memberShipRepo.findById(mobileNumber).orElse(null);
        String memberId = memberShip.getMemberId();
        List<CheckOut> li = checkOutRepo.findByMobileNumberAndBookId(bookId, memberId);
        if (li.size() == 0) {
            return "Match doesn't exist !!! .  Please verify the Mobile Number and Book Id";
        }
        CheckOut checkOut = li.get(0);
        long id = checkOut.getId();
        checkOutRepo.deleteById(id);
        Books books = booksRepo.findById(bookId).orElse(null);
        int f = books.getBooksLeft();
        f = f + 1;
        books.setBooksLeft(f);
        booksRepo.save(books);
        return "Check In Success";
    }

    @GetMapping("/getAllCheckOutBooks")
    public List<CheckOut> getAllCheckOuts()
    {
        return checkOutRepo.findAll();
    }

    @GetMapping("getDelayedCheckOutBooks")
    public List<CheckOut> getDelayedCheckOutBooks()
    {
        LocalDate currentDate = LocalDate.now();
        return checkOutRepo.findDelayed(currentDate);
    }

    @GetMapping("/getMemberMail/{memberId}")
    public String getMemberMail(@PathVariable String memberId)
    {
        List<MemberShip> memberShip = memberShipRepo.getId(memberId);
        String mail = memberShip.get(0).getEmail();
        return mail;
    }
}
