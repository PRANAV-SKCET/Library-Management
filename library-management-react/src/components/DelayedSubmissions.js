import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../cssfolder/DelayedSubmissions.css';
import emailjs from 'emailjs-com';

export default function DelayedSubmissions() {
    const [CheckOutBooks, setCheckOutBooks] = useState([]);

    const fetchCheckOutBooks = async () => {
        const response = await axios.get('http://localhost:8080/getDelayedCheckOutBooks');
        setCheckOutBooks(response.data);
    };
    const calculateOverdueDays = (checkInDate) => {
        const currentDate = new Date();
        const checkIn = new Date(checkInDate);
        const timeDiff = currentDate - checkIn;
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysDiff > 0 ? daysDiff : 0;
    };


    const sendEmail = async(memberName, bookTitle, checkInDate,memberId) => {
        const response =  await axios.get(`http://localhost:8080/getMemberMail/${memberId}`);
        const email=response.data;
        const templateParams = {
            to_email: email,
            memberName: memberName,
            bookTitle: bookTitle,
            checkInDate: checkInDate,
        };

        emailjs.send('service_i2dtwhz', 'template_b32l3me', templateParams, 'PCQ8Q6I17M3_kd2Ad')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
            }, (err) => {
                console.error('Failed to send email:', err);
            });
    };


    const handleAlertAll = () => {
        CheckOutBooks.forEach((checkOut) => {
            sendEmail(checkOut.memberName, checkOut.bookName, checkOut.checkInDate, checkOut.memberId);
        });
    };

    useEffect(() => {
        fetchCheckOutBooks();
    }, []);

    return (
        <div className="main-delayed">
            <div className="DelayedSubmissions-container">
                <h2 className="DelayedSubmissions-heading">Delayed Submissions</h2>
                <button className="alert-all-button" onClick={handleAlertAll}>Alert All</button>
                {CheckOutBooks.map((checkOut, index) => (
                    <div className="DelayedSubmissions-card" key={index}>
                        <p><span className="DelayedSubmissions-label">Member Name:</span> <span className="DelayedSubmissions-value">{checkOut.memberName}</span></p>
                        <p><span className="DelayedSubmissions-label">Member Id:</span> <span className="DelayedSubmissions-value">{checkOut.memberId}</span></p>
                        <p><span className="DelayedSubmissions-label">Book Name:</span> <span className="DelayedSubmissions-value">{checkOut.bookName}</span></p>
                        <p><span className="DelayedSubmissions-label">Book Id:</span> <span className="DelayedSubmissions-value">{checkOut.bookId}</span></p>
                        <p><span className="DelayedSubmissions-label">Author:</span> <span className="DelayedSubmissions-value">{checkOut.bookAuthor}</span></p>
                        <p><span className="DelayedSubmissions-label">Check-Out-Date:</span> <span className="DelayedSubmissions-value">{checkOut.checkOutDate}</span></p>
                        <p><span className="DelayedSubmissions-label">Check-In-Date:</span> <span className="DelayedSubmissions-value">{checkOut.checkInDate}</span></p>
                        <p><span className="DelayedSubmissions-label">Overdue Days:</span> <span className="DelayedSubmissions-value DelayedSubmissions-value-overdue">{calculateOverdueDays(checkOut.checkInDate)}</span></p>
                        <button onClick={() => sendEmail(checkOut.memberName, checkOut.bookName, checkOut.checkInDate, checkOut.memberId)}>Alert</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
