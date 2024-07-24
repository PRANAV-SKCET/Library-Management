import React from 'react';
import '../cssfolder/AdminNavbar.css';
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
    return (
        <div className="AdminNavbar-container">
          
            <nav className="AdminNavbar-nav">
                <Link to="/adminHome" className="AdminNavbar-link">Home</Link>
                <Link to="/addMembership" className="AdminNavbar-link">Add Membership</Link>
                <Link to="/addBooks" className="AdminNavbar-link">Add Books</Link>
                <Link to="/deleteBooks" className="AdminNavbar-link">Delete Books</Link>
                <Link to="/checkOutBooks" className="AdminNavbar-link">Check-Out Books</Link>
                <Link to="/delayedSubmissions" className="AdminNavbar-link">Delayed Submissions</Link>
                <button className="AdminNavbar-logout">Logout</button>
            </nav>
        </div>
    );
}