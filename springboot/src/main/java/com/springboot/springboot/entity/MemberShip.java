package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MemberShip {
    @Id
    private String mobileNumber;
    private String name;
    private String memberId;
    private String membershipDate;
    private String dateofBirth;
    private String address;
    private String gender;
    private String email;
    public MemberShip() {
    }
    public MemberShip(String mobileNumber, String name, String memberId, String membershipDate, String dateofBirth,
            String address, String gender, String email) {
        this.mobileNumber = mobileNumber;
        this.name = name;
        this.memberId = memberId;
        this.membershipDate = membershipDate;
        this.dateofBirth = dateofBirth;
        this.address = address;
        this.gender = gender;
        this.email = email;
    }
    public String getMobileNumber() {
        return mobileNumber;
    }
    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMemberId() {
        return memberId;
    }
    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }
    public String getMembershipDate() {
        return membershipDate;
    }
    public void setMembershipDate(String membershipDate) {
        this.membershipDate = membershipDate;
    }
    public String getDateofBirth() {
        return dateofBirth;
    }
    public void setDateofBirth(String dateofBirth) {
        this.dateofBirth = dateofBirth;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    
    
}
