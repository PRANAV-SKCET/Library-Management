import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
    width: '100%',
    backgroundColor: '#f8d7da', // Light red background color
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'center', // Center the navbar within the parent
    padding: '10px 0' // Add padding to make it look more spacious
};

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px', // Ensure the content width is controlled
    padding: '0 20px'
};

const leftStyle = {
    flex: '1',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center'
};

const rightStyle = {
    display: 'flex',
    justifyContent: 'center',
    flex: '2'
};

const linkStyle = {
    margin: '0 15px', // Increase margin for better spacing
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px', // Increase font size for better readability
    transition: 'color 0.3s ease', // Smooth color transition
    display: 'flex',
    alignItems: 'center'
};

const iconStyle = {
    marginRight: '8px', // Space between icon and text
    fontSize: '20px' // Adjust icon size
};

const linkHoverStyle = {
    color: '#d9534f' // Change color on hover for better interactivity
};

export default function MemberNavbar() {
    return (
        <div style={navbarStyle}>
            <nav style={navStyle}>
                <div style={leftStyle}>
                    <Link to="/searchBooks" style={linkStyle}>
                        <span style={iconStyle}>🏠</span> {/* Unicode home icon */}
                        Home Page
                    </Link>
                </div>
                <div style={rightStyle}>
                    <Link to="/searchBooks" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Search Books</Link>
                    <Link to="/applyMembership" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Apply for Membership</Link>
                    <Link to="/checkIn" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Check-In</Link>
                    <Link to="/checkOut" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Check-Out</Link>
                </div>
            </nav>
        </div>
    );
}
