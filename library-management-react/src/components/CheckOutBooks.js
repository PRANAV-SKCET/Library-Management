import axios from 'axios';
import { useEffect, useState } from 'react';
import '../cssfolder/CheckOutBooks.css';

export default function CheckOutBooks() {
    const [checkOutBooks, setCheckOutBooks] = useState([]);

    const fetchCheckOutBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getAllCheckOutBooks');
            setCheckOutBooks(response.data);
        } catch (error) {
            console.error('Error fetching check-out books:', error);
        }
    };

    useEffect(() => {
        fetchCheckOutBooks();
    }, []);

    return (
        <div className="checkOutContainer">
            <h2 className="checkOutTitle">All Check Out Books</h2>
            {checkOutBooks.map((checkOut, index) => (
                <div key={index} className="checkOutItem">
                    <div>
                        <p><strong>Member Id:</strong> {checkOut.memberId}</p>
                        <p><strong>Member Name:</strong> {checkOut.memberName}</p>
                    </div>
                    <div>
                        <p><strong>Book Id:</strong> {checkOut.bookId}</p>
                        <p><strong>Book Name:</strong> {checkOut.bookName}</p>
                    </div>
                    <div>
                        <p><strong>Check-Out Date:</strong> {checkOut.checkOutDate}</p>
                        <p><strong>Check-In Date:</strong> {checkOut.checkInDate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
