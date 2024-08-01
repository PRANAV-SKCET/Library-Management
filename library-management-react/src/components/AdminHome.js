import React from 'react';
import '../cssfolder/AdminHome.css';

const AdminHomePage = () => {
  return (
    <div className="AdminHome-container">
      <h1 className="AdminHome-heading">Library Management System - Admin Home Page</h1>
      <div className="AdminHome-section">
        <div className="AdminHome-descriptionBox">
          <p className="AdminHome-descriptionText">
            Welcome to the Library Management System. Here you can manage the entire library, including adding and removing books, viewing all books, and managing user accounts. Our system ensures a seamless and efficient way to handle all library operations.
          </p>
        </div>
        <div className="AdminHome-descriptionBox">
          <p className="AdminHome-descriptionText">
            To disseminate the scholarly resources among the users through automation and open-source software packages.
          </p>
        </div>
        <div className="AdminHome-descriptionBox">
          <p className="AdminHome-descriptionText">
            A well-structured, user-friendly library website is a vital asset for any modern library.
          </p>
        </div>
        <div className="AdminHome-box">
          <button className="AdminHome-button">Library Details</button>
          <button className="AdminHome-button">Feedback</button>
          <button className="AdminHome-button">About Us</button>
          <button className="AdminHome-button">Contact Us</button>
        </div>
      </div>
      <footer className="AdminHome-footer">
        &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminHomePage;
