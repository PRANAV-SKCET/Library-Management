import { Link } from 'react-router-dom';
import '../cssfolder/OpeningPage.css';

export default function OpeningPage(){
    return(
        <div className='OpeningPage-container'>
            <h1 className='OpeningPage-title'>Book Sphere Library</h1>
            <div className='OpeningPage-links'>
                <Link to="/admin" className='OpeningPage-link'>Admin</Link>
                <Link to="/searchBooks" className='OpeningPage-link'>Member</Link>
            </div>
            <footer className='OpeningPage-footer'>
                <p>© 2024 Book sphere Library. All rights reserved.</p>
                <div className='OpeningPage-social-links'>
                    <a href='#' className='OpeningPage-social-link'>Facebook</a>
                    <a href='#' className='OpeningPage-social-link'>Twitter</a>
                    <a href='#' className='OpeningPage-social-link'>Instagram</a>
                </div>
            </footer>
        </div>
    );
}
