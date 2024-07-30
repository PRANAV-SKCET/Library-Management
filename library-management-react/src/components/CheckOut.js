import { useContext, useState } from "react";
import MemberNavbar from "./MemberNavbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context";
import '../cssfolder/CheckOut.css';

export default function CheckOut() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState('');
    const { setMemberMobileNumber } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleVerify = async () => {
        try {
            const response = await axios.post('http://localhost:8080/verifyMember', null, {
                params: { mobileNumber: mobileNumber }
            });

            setMessage(response.data);
            if (response.data === "Member Verified") {
                setMemberMobileNumber(mobileNumber);
                setTimeout(() => {
                    navigate("/checkOutFinal");
                }, 500);
            }
        } catch (error) {
            setMessage("Verification failed. Please try again.");
        }
    }

    return (
        <div>
        <MemberNavbar />
        <div className="CheckOut-background">
        <div className="CheckOut-container">
        <h2 className="CheckOut-header">Check Out</h2>
        <div className="CheckOut-form">
        <label htmlFor="mobileNumber" className="CheckOut-label">Mobile Number</label>
                    <div className="CheckOut-form-field">
                        <input
                            id="mobileNumber"
                            type="text"
                            placeholder="Enter your Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="CheckOut-input"
                            />
                    </div>
                    <button onClick={handleVerify} className="CheckOut-button">Verify</button>
                    <div className="CheckOut-message">{message}</div>
                </div>
                </div>
                </div>
                </div>
            );
}
