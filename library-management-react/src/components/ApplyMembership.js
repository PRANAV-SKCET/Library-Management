import React, { useState } from 'react';
import axios from 'axios';
import '../cssfolder/ApplyMembership.css';
import MemberNavbar from './MemberNavbar';

export default function ApplyMembership() {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        name: '',
        dateOfBirth: '',
        address: '',
        gender: '',
        email: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleGenderChange = (gender) => {
        setFormData({
            ...formData,
            gender: gender
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const dataToSend = {
            ...formData,
            memberShipId: null,
            membershipDate: currentDate,
            status: "Not Active"
        };

        try {
            const response = await axios.post('http://localhost:8080/newMember', dataToSend);
            if (response.data === "Request Submitted") {
                setErrorMessage('Application Submitted Successfully');
                setTimeout(() => {
                    setErrorMessage('');
                    setFormData({
                        mobileNumber: '',
                        name: '',
                        dateOfBirth: '',
                        address: '',
                        gender: '',
                        email: ''
                    });
                }, 1000);

            } else {
                setErrorMessage(response.data);
            }
        } catch (error) {
            setErrorMessage('There was an error submitting the form! Please try again.');
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div>
            <MemberNavbar />
            <div className="ApplyMembership-body">
                <div className="ApplyMembership-container">
                    <div className="ApplyMembership-image"></div>
                    <div className="ApplyMembership-form-container">
                        <h1 className="ApplyMembership-header">Enter Your Details</h1>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <form className="ApplyMembership-form" onSubmit={handleSubmit}>
                            <div className="ApplyMembership-form-group">
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="ApplyMembership-form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="ApplyMembership-form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="ApplyMembership-form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="ApplyMembership-form-group">
                                <label>Gender</label>
                                <div className="ApplyMembership-gender-group">
                                    <button
                                        type="button"
                                        className={`ApplyMembership-gender-button ${formData.gender === 'male' ? 'active' : ''}`}
                                        onClick={() => handleGenderChange('male')}
                                    >
                                        Male
                                    </button>
                                    <button
                                        type="button"
                                        className={`ApplyMembership-gender-button ${formData.gender === 'female' ? 'active' : ''}`}
                                        onClick={() => handleGenderChange('female')}
                                    >
                                        Female
                                    </button>
                                    <button
                                        type="button"
                                        className={`ApplyMembership-gender-button ${formData.gender === 'preferNotToSay' ? 'active' : ''}`}
                                        onClick={() => handleGenderChange('preferNotToSay')}
                                    >
                                        Prefer not to say
                                    </button>
                                </div>
                            </div>
                            <div className="ApplyMembership-form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <hr className="ApplyMembership-divider" />
                            <div className="ApplyMembership-submit-container">
                                <button type="submit" className="ApplyMembership-submit-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
