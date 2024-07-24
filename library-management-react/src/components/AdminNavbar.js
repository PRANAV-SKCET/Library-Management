import React from 'react';
import '../cssfolder/AdminNavbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar() {
    const { setIsAdminLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick=()=>{
        setIsAdminLoggedIn(false);
        navigate("/admin");
    }
    return (
        <div className="AdminNavbar-container">
          
            <nav className="AdminNavbar-nav">
                <Link to="/adminHome" className="AdminNavbar-link">Home</Link>
                <Link to="/addMembership" className="AdminNavbar-link">Add Membership</Link>
                <Link to="/addBooks" className="AdminNavbar-link">Add Books</Link>
                <Link to="/deleteBooks" className="AdminNavbar-link">Delete Books</Link>
                <Link to="/checkOutBooks" className="AdminNavbar-link">Check-Out Books</Link>
                <Link to="/delayedSubmissions" className="AdminNavbar-link">Delayed Submissions</Link>
                <button className="AdminNavbar-logout" onClick={handleClick}>Logout</button>
            </nav>
        </div>
    );
}