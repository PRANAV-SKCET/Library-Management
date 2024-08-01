import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfolder/MemberNavbar.css'; // Import the CSS file
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function MemberNavbar() {
    return (
        <div className="MemberNavbar-container">
            <nav className="MemberNavbar-nav">
                <div className="MemberNavbar-left">
                    <Link to="/" className="MemberNavbar-link">
                        <span className="MemberNavbar-icon"><LogoutIcon/></span> {/* Unicode home icon */}
                        Back
                    </Link>
                </div>
                <div className="MemberNavbar-right">
                    <Link to="/searchBooks" className="MemberNavbar-link"><FindInPageIcon/>Search Books</Link>
                    <Link to="/applyMembership" className="MemberNavbar-link"><AddReactionIcon/>Apply for Membership</Link>
                    <Link to="/checkIn" className="MemberNavbar-link"><AddTaskIcon/>Check-In</Link>
                    <Link to="/checkOut" className="MemberNavbar-link"><DoneAllIcon/>Check-Out</Link>
                </div>
            </nav>
        </div>
    );
}
