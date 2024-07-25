import React from 'react';
import '../cssfolder/ApplyMembership.css';

export default function ApplyMembership() {
    return (
        <div className="ApplyMembership-body">
            <div className="ApplyMembership-container">
                <h1 className="ApplyMembership-title">Enter Your Details</h1>
                <form className="ApplyMembership-form">
                    <div className="ApplyMembership-form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="tel" id="mobileNumber" name="mobileNumber" required />
                    </div>
                    <div className="ApplyMembership-form-group">
                        <label htmlFor="membershipDate">Membership Date</label>
                        <input type="date" id="membershipDate" name="membershipDate" required />
                    </div>
                    <div className="ApplyMembership-form-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" required />
                    </div>
                    <div className="ApplyMembership-form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                    <div className="ApplyMembership-form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="ApplyMembership-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <button type="submit" className="ApplyMembership-submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}
