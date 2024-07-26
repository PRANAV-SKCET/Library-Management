import axios from 'axios';
import '../cssfolder/DeleteBooks.css';
import { useState } from 'react';

export default function DeleteBooks() {
    const [bookId, setBookId] = useState('');
    const [noOfBooks, setNoOfBooks] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/deleteBook', null, {
                params: {
                    bookId: bookId,
                    noOfBooks: noOfBooks
                }
            });
            if(response.data==="Book Removed")
            {
                setTimeout(()=>
                {
                    window.location.reload();
                }
                ,1000);
            }
            setMessage(response.data);
        } catch (error) {
            setMessage('There was an error deleting the book!');
        }
    };

    return (
        <div className="delete-container">
            <div className="delete-message">{message}</div>
            <h1>Delete Books</h1>
            <form onSubmit={handleSubmit}>
                <label>Book Id</label>
                <input
                    type='text'
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                />
                <label>Number of Books</label>
                <input
                    type='number'
                    value={noOfBooks}
                    onChange={(e) => setNoOfBooks(parseInt(e.target.value))}
                />
                <button type='submit'>Delete</button>
            </form>
        </div>
    );
}
