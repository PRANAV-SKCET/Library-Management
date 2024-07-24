import React from 'react';
import '../cssfolder/AdminNavbar.css';
import { Link } from 'react-router-dom';

export default function MemberNavbar() {

    return (
        <div className="AdminNavbar-container">
          
            <nav className="AdminNavbar-nav">
                <Link to="/searchBooks" className="AdminNavbar-link">Search Books</Link>
                <Link to="/applyMembership" className="AdminNavbar-link">Apply for Membership</Link>
                <Link to="/checkIn" className="AdminNavbar-link">Check-In</Link>
                <Link to="/checkOut" className="AdminNavbar-link">Check-Out</Link>
            </nav>
        </div>
    );
}