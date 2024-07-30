import { useState } from "react";
import MemberNavbar from "./MemberNavbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../cssfolder/CheckIn.css';

export default function CheckIn() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCheckIn = async () => {
        const response = await axios.post('http://localhost:8080/checkIn', null, {
            params: {
                mobileNumber: mobileNumber,
                bookId: bookId
            }
        });

        setMessage(response.data);
        if (response.data === "Check In Success") {
            setTimeout(() => {
                navigate("/");
            }, 500);
        }
    }

    return (
        <div>
            <MemberNavbar />
            <div className="CheckIn-container">
                <div className="CheckIn-card">
                    <h2 className="CheckIn-header">Check In</h2>
                    <div className="CheckIn-form">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter your Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        <label>Book Id</label>
                        <input
                            type="text"
                            placeholder="Enter Book Id"
                            value={bookId}
                            onChange={(e) => setBookId(e.target.value)}
                        />
                        <button onClick={handleCheckIn}>Check In</button>
                        <div className="CheckIn-message">{message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
