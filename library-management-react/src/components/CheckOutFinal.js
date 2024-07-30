import { useState, useEffect, useContext } from "react";
import MemberNavbar from "./MemberNavbar";
import { AuthContext } from "./context";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../cssfolder/CheckOutFinal.css';

export default function CheckOutFinal() {
    const {memberMobileNumber} = useContext(AuthContext);
    const [memberDetails, setMemberDetails] = useState({ memberId: '', memberName: '' });
    const [bookId, setBookId] = useState('');
    const [bookDetails, setBookDetails] = useState({ bookName: '', bookAuthor: '' });
    const [checkOutDate, setCheckOutDate] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [status] = useState('Checked-OUT');
    const [message,setMessage] = useState('');
    const navigate = useNavigate();

    const checkOutButton = async () => {
        try {
            const response = await axios.post('http://localhost:8080/checkout', {
                bookAuthor: bookDetails.bookAuthor,
                bookId: bookId,
                bookName: bookDetails.bookName,
                checkInDate: checkInDate,
                checkOutDate: checkOutDate,
                memberId: memberDetails.memberId,
                memberName: memberDetails.memberName,
                status: status
            });
            setMessage(response.data);
            setTimeout(()=>{
                setMessage('');
                navigate("/");
            },1000);
        } catch (error) {
            console.error("Error checking out book:", error);
        }
    };

    useEffect(() => {
        const fetchMemberDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/getMemberDetails?mobileNumber=${memberMobileNumber}`);
                setMemberDetails({
                    memberId: response.data.memberId,
                    memberName: response.data.name
                });
            } catch (error) {
                console.error("Error fetching member details:", error);
            }
        };

        fetchMemberDetails();

        const currentDate = new Date();
        setCheckOutDate(currentDate.toISOString().split('T')[0]);

        const checkInDate = new Date();
        checkInDate.setDate(currentDate.getDate() + 5);
        setCheckInDate(checkInDate.toISOString().split('T')[0]);
    }, [memberMobileNumber]);

    useEffect(() => {
        const fetchBookDetails = async () => {
            if (bookId) {
                try {
                    const response = await axios.get('http://localhost:8080/getBookDetails', {
                        params: { bookId }
                    });
                    setBookDetails({
                        bookName: response.data.bookName,
                        bookAuthor: response.data.bookAuthor
                    });
                } catch (error) {
                    console.error("Error fetching book details:", error);
                }
            }
        };

        fetchBookDetails();
    }, [bookId]);

    return (
        <div>
        <MemberNavbar />
        <div className="CheckOutFinal-background">
            <div className="CheckOutFinal-container">
            <h2 className="CheckOutFinal-header">Check Out Final</h2>
            <div className="CheckOutFinal-form">
            <label className="CheckOutFinal-label">Member ID: {memberDetails.memberId}</label>
                    <br />
                    <label className="CheckOutFinal-label">Member Name: {memberDetails.memberName}</label>
                </div>
                <label className="CheckOutFinal-label">Book ID</label>
                <div className="CheckOutFinal-form-field">
                <input
                        className="CheckOutFinal-input"
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        placeholder="Enter Book ID"
                    />
                </div>
                <div className="CheckOutFinal-form">
                <label className="CheckOutFinal-label">Book Name: {bookDetails.bookName}</label>
                <br />
                <label className="CheckOutFinal-label">Book Author: {bookDetails.bookAuthor}</label>
                </div>
                <div className="CheckOutFinal-form">
                <label className="CheckOutFinal-label">Check Out Date: {checkOutDate}</label>
                <br />
                <label className="CheckOutFinal-label">Check In Date: {checkInDate}</label>
                <br />
                </div>
                <button className="CheckOutFinal-button" onClick={checkOutButton}>CheckOut</button>
                <div className="CheckOutFinal-message">{message}</div>
                </div>
                </div>
                </div>
            );
}
