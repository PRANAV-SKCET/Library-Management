import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../cssfolder/DelayedSubmissions.css';

export default function DelayedSubmissions() {
    const [CheckOutBooks, setCheckOutBooks] = useState([]);

    const fetchCheckOutBooks = async () => {
        const response = await axios.get('http://localhost:8080/getDelayedCheckOutBooks');
        setCheckOutBooks(response.data);
    };

    useEffect(() => {
        fetchCheckOutBooks();
    }, []);

    return (
        <div className="DelayedSubmissions-container">
            <h2 className="DelayedSubmissions-heading">Delayed Submissions</h2>
            {CheckOutBooks.map((checkOut, index) => (
                <div className="DelayedSubmissions-card" key={index}>
                    <p><span className="DelayedSubmissions-label">Member Name:</span> <span className="DelayedSubmissions-value">{checkOut.memberName}</span></p>
                    <p><span className="DelayedSubmissions-label">Member Id:</span> <span className="DelayedSubmissions-value">{checkOut.memberId}</span></p>
                    <p><span className="DelayedSubmissions-label">Book Name:</span> <span className="DelayedSubmissions-value">{checkOut.bookName}</span></p>
                    <p><span className="DelayedSubmissions-label">Book Id:</span> <span className="DelayedSubmissions-value">{checkOut.bookId}</span></p>
                    <p><span className="DelayedSubmissions-label">Author:</span> <span className="DelayedSubmissions-value">{checkOut.bookAuthor}</span></p>
                    <p><span className="DelayedSubmissions-label">Check-Out-Date:</span> <span className="DelayedSubmissions-value">{checkOut.checkOutDate}</span></p>
                    <p><span className="DelayedSubmissions-label">Check-In-Date:</span> <span className="DelayedSubmissions-value">{checkOut.checkInDate}</span></p>
                    <div className="DelayedSubmissions-divider"></div>
                </div>
            ))}
        </div>
    );
}
