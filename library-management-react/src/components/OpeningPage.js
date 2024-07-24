import { Link } from 'react-router-dom';
import '../cssfolder/OpeningPage.css';

export default function OpeningPage(){
    return(
        <div className='opening'>
            <h1>SKCET Library</h1>
            <div className='links'>
                <Link to="/admin" className='link'>Admin</Link>
                <Link to="/searchBooks" className='link'>Member</Link>
            </div>
        </div>
    );
}
