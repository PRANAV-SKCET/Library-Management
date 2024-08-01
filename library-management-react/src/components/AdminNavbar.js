import React from 'react';
import '../cssfolder/AdminNavbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

export default function AdminNavbar() {
    const { setIsAdminLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick=()=>{
        setIsAdminLoggedIn(false);
        navigate("/");
    }
    return (
        <div className="AdminNavbar-container">
          
            <nav className="AdminNavbar-nav">
                <Link to="/adminHome" className="AdminNavbar-link" ><HomeIcon/>Home</Link>
                <Link to="/addMembership" className="AdminNavbar-link"><BookmarkAddIcon/>Add Membership</Link>
                <Link to="/addBooks" className="AdminNavbar-link"><BookmarkAddedIcon/>Add Books</Link>
                <Link to="/deleteBooks" className="AdminNavbar-link"><BookmarkRemoveIcon/>Delete Books</Link>
                <Link to="/checkOutBooks" className="AdminNavbar-link"><CheckCircleOutlineIcon/>Check-Out Books</Link>
                <Link to="/delayedSubmissions" className="AdminNavbar-link"><AssignmentLateIcon/>Delayed Submissions</Link>
                <Link to="/members" className="AdminNavbar-link"><RememberMeIcon/>Library Members</Link>
                <button className="AdminNavbar-logout" onClick={handleClick}>Logout</button>
            </nav>
        </div>
    );
}