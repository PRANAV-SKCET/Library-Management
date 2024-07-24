import React from 'react';
import '../cssfolder/AdminNavbar.css';

export default function AdminNavbar() {
    return (
        <div className="AdminNavbar-container">
          
            <nav className="AdminNavbar-nav">
                <a href="/" className="AdminNavbar-link">Home</a>
                <a href="/add-membership" className="AdminNavbar-link">Add Membership</a>
                <a href="/add-books" className="AdminNavbar-link">Add Books</a>
                <a href="/delete-books" className="AdminNavbar-link">Delete Books</a>
                <button className="AdminNavbar-logout">Logout</button>
            </nav>
        </div>
    );
}