import { useState, useEffect, useContext } from "react";
import MemberNavbar from "./MemberNavbar";
import { AuthContext } from "./context";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
            },1000)
            
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
            <h2>Check Out Final</h2>
            <div>
                <label>Member ID: {memberDetails.memberId}</label>
                <br />
                <label>Member Name: {memberDetails.memberName}</label>
            </div>
            <div>
                <label>Book ID</label>
                <input
                    type="text"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    placeholder="Enter Book ID"
                />
            </div>
                <div>
                    <label>Book Name: {bookDetails.bookName}</label>
                    <br />
                    <label>Book Author: {bookDetails.bookAuthor}</label>
                </div>
            <div>
                <label>Check Out Date: {checkOutDate}</label>
                <br />
                <label>Check In Date: {checkInDate}</label>
                <br />
            </div>
            <button onClick={checkOutButton}>CheckOut</button>
            {message}
        </div>
    );
}
