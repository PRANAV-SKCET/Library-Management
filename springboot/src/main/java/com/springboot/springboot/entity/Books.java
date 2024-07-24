package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Books {
    @Id
    private String bookId;
    private String bookName;
    private String bookAuthor;
    private int noOfBooks;
    private int booksLeft;
    private String date;
    public Books() {
    }
    public Books(String bookId, String bookName, String bookAuthor, int noOfBooks, int booksLeft, String date) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.noOfBooks = noOfBooks;
        this.booksLeft = booksLeft;
        this.date = date;
    }
    public String getBookId() {
        return bookId;
    }
    public void setBookId(String bookId) {
        this.bookId = bookId;
    }
    public String getBookName() {
        return bookName;
    }
    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
    public String getBookAuthor() {
        return bookAuthor;
    }
    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }
    public int getNoOfBooks() {
        return noOfBooks;
    }
    public void setNoOfBooks(int noOfBooks) {
        this.noOfBooks = noOfBooks;
    }
    public int getBooksLeft() {
        return booksLeft;
    }
    public void setBooksLeft(int booksLeft) {
        this.booksLeft = booksLeft;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    
}
