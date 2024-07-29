import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../cssfolder/OpeningPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function OpeningPage() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='OpeningPage-container'>
            <div className='OpeningPage-box'>
                <h1 className='OpeningPage-title'>Book Sphere Library</h1>
                <p className='OpeningPage-welcome'>Welcome to the Book Sphere Library. Explore, Learn, and Grow!</p>
                <div className='OpeningPage-time'>Current Time: {currentTime}</div>
                <div className='OpeningPage-links'>
                    <Link to="/admin" className='OpeningPage-link'>Admin</Link>
                    <Link to="/searchBooks" className='OpeningPage-link'>Member</Link>
                </div>
            </div>
            <footer className='OpeningPage-footer'>
                <p>© 2024 Book Sphere Library. All rights reserved.</p>
                <div className='OpeningPage-social-links'>
                    <a href='https://www.facebook.com/' className='OpeningPage-social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook'></i>
                        
                    </a>
                    <a href='https://x.com/i/flow/login' className='OpeningPage-social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-x-twitter'></i>
                        
                    </a>
                    <a href='https://www.instagram.com/' className='OpeningPage-social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram'></i>
                        
                    </a>
                </div>
            </footer>
        </div>
    );
}
