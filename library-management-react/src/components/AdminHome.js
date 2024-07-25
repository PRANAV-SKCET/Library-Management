// src/AdminHomePage.js
import React from 'react';

const AdminHomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Library Management System - Admin Home Page</h1>
      <div style={styles.section}>
        <div style={styles.descriptionBox}>
          <p style={styles.descriptionText}>
            Welcome to the Library Management System. Here you can manage the entire library, including adding and removing books, viewing all books, and managing user accounts. Our system ensures a seamless and efficient way to handle all library operations.
          </p>
        </div>
        <div style={styles.descriptionBox}>
          <p style={styles.descriptionText}>
          To disseminate the scholarly resources among the users through automation and open-source software packages.          </p>
        </div>
        <div style={styles.descriptionBox}>
          <p style={styles.descriptionText}>
A well-structured, user-friendly library website is a vital asset for any modern library          </p>
        </div>
        <div style={styles.box}>
          <button style={styles.button}>Library Details</button>
          <button style={styles.button}>Feedback</button>
          <button style={styles.button}>About Us</button>
          <button style={styles.button}>Contact Us</button>
        </div>
      </div>
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: 'url("https://i.pinimg.com/originals/44/99/54/4499543a663da918ff3ef755d1b6339c.jpg")',
    backgroundSize: 'cover',
    height: '100vh',
    color: 'white',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  descriptionBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '80%',
  },
  descriptionText: {
    fontSize: '1.2em',
    lineHeight: '1.5',
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  buttonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'black',
  },
  footer: {
    marginTop: 'auto',
    padding: '10px',
    width: '100%',
    textAlign: 'center',
  },
};

export default AdminHomePage;
