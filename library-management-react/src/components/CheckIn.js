import React, { useState } from 'react';
import axios from 'axios';
import '../cssfolder/CheckIn.css';
import MemberNavbar from './MemberNavbar';

export default function CheckIn() {
    const [formData, setFormData] = useState({
        bookId: '',
        bookTitle: '',
        memberId: '',
        memberName: '',
        checkOutDate: '',
        dueDate: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/checkIn', formData);
            console.log(response.data);
            // Handle successful response
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <MemberNavbar />
            <div className="CheckIn-body">
                <div className="CheckIn-container">
                    <h1 className="CheckIn-title">Check-in Book</h1>
                    <form className="CheckIn-form" onSubmit={handleSubmit}>
                        <div className="CheckIn-form-group">
                            <label>Book ID/ISBN</label>
                            <input type="text" name="bookId" value={formData.bookId} onChange={handleChange} required />
                        </div>
                        <div className="CheckIn-form-group">
                            <label>Book Title</label>
                            <input type="text" name="bookTitle" value={formData.bookTitle} onChange={handleChange} required />
                        </div>
                        <div className="CheckIn-form-group">
                            <label>Member ID</label>
                            <input type="text" name="memberId" value={formData.memberId} onChange={handleChange} required />
                        </div>
                        <div className="CheckIn-form-group">
                            <label>Member Name</label>
                            <input type="text" name="memberName" value={formData.memberName} onChange={handleChange} required />
                        </div>
                        <div className="CheckIn-form-group">
                            <label>Check-out Date</label>
                            <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
                        </div>
                        <div className="CheckIn-form-group">
                            <label>Due Date</label>
                            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="CheckIn-submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
