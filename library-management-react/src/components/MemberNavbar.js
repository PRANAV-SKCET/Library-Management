import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfolder/MemberNavbar.css'; // Import the CSS file

export default function MemberNavbar() {
    return (
        <div className="MemberNavbar-container">
            <nav className="MemberNavbar-nav">
                <div className="MemberNavbar-left">
                    <Link to="/searchBooks" className="MemberNavbar-link">
                        <span className="MemberNavbar-icon">🏠</span> {/* Unicode home icon */}
                        Home Page
                    </Link>
                </div>
                <div className="MemberNavbar-right">
                    <Link to="/searchBooks" className="MemberNavbar-link">Search Books</Link>
                    <Link to="/applyMembership" className="MemberNavbar-link">Apply for Membership</Link>
                    <Link to="/checkIn" className="MemberNavbar-link">Check-In</Link>
                    <Link to="/checkOut" className="MemberNavbar-link">Check-Out</Link>
                </div>
            </nav>
        </div>
    );
}
