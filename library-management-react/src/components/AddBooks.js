import React, { useState } from 'react';
import axios from 'axios';
import '../cssfolder/AddBooks.css';

export default function AddBook() {
    const [formData, setFormData] = useState({
        bookId: '',
        bookName: '',
        bookAuthor: '',
        noOfBooks: '',
        rackNo: '',
        shelfNo: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const booksLeft = formData.noOfBooks;
        const date = new Date().toISOString();

        const dataToSend = {
            ...formData,
            booksLeft,
            date
        };

        try {
            await axios.post('http://localhost:8080/addBook', dataToSend);
            setMessage('Book added successfully!');
            setTimeout(() => {
                setMessage('');
            }, 1000);
            setFormData({
                bookId: '',
                bookName: '',
                bookAuthor: '',
                noOfBooks: '',
                rackNo: '',
                shelfNo: ''
            });
        } catch (error) {
            setMessage('There was an error adding the book. Please try again.');
        }
    };

    return (
        <div className="AddBook-background">
            <div className="AddBook-container">
                <h2 className="AddBook-title">Add New Book</h2>
                {message && <p className="AddBook-message">{message}</p>}
                <form className="AddBook-form" onSubmit={handleSubmit}>
                    <div className="AddBook-field">
                        <label htmlFor="bookId" className="AddBook-label">Book ID</label>
                        <input
                            type="text"
                            id="bookId"
                            name="bookId"
                            value={formData.bookId}
                            onChange={handleChange}
                            className="AddBook-input"
                        />
                    </div>
                    <div className="AddBook-field">
                        <label htmlFor="bookName" className="AddBook-label">Book Name</label>
                        <input
                            type="text"
                            id="bookName"
                            name="bookName"
                            value={formData.bookName}
                            onChange={handleChange}
                            className="AddBook-input"
                        />
                    </div>
                    <div className="AddBook-field">
                        <label htmlFor="bookAuthor" className="AddBook-label">Book Author</label>
                        <input
                            type="text"
                            id="bookAuthor"
                            name="bookAuthor"
                            value={formData.bookAuthor}
                            onChange={handleChange}
                            className="AddBook-input"
                        />
                    </div>
                    <div className="AddBook-field">
                        <label htmlFor="noOfBooks" className="AddBook-label">Number of Books</label>
                        <input
                            type="number"
                            id="noOfBooks"
                            name="noOfBooks"
                            value={formData.noOfBooks}
                            onChange={handleChange}
                            className="AddBook-input"
                        />
                    </div>
                    <div className="AddBook-field">
                        <label htmlFor="rackNo" className="AddBook-label">Rack Number</label>
                        <input
                            type="text"
                            id="rackNo"
                            name="rackNo"
                            value={formData.rackNo}
                            onChange={handleChange}
                            className="AddBook-input"
                        />
                    </div>
                    <div className="AddBook-field">
                        <label htmlFor="shelfNo" className="AddBook-label">Shelf Number</label>
                        <input
                            type="text"
                            id="shelfNo"
                            name="shelfNo"
                            value={formData.shelfNo}
                            onChange={handleChange}
                            className="AddBook-input"
                        />
                    </div>
                    <button type="submit" className="AddBook-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
