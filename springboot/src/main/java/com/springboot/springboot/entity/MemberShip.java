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
    private String dateOfBirth;
    private String address;
    private String gender;
    private String email;
    private String status;
    private long count;

    public MemberShip() {
    }

    public MemberShip(String mobileNumber, String name, String memberId, String membershipDate, String dateOfBirth,
            String address, String gender, String email, String status,long count) {
        this.mobileNumber = mobileNumber;
        this.name = name;
        this.memberId = memberId;
        this.membershipDate = membershipDate;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.gender = gender;
        this.email = email;
        this.status = status;
        this.count = count;
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

    public String getdateOfBirth() {
        return dateOfBirth;
    }

    public void setdateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // public String getDateOfBirth() {
    //     return dateOfBirth;
    // }

    // public void setDateOfBirth(String dateOfBirth) {
    //     this.dateOfBirth = dateOfBirth;
    // }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    

}
