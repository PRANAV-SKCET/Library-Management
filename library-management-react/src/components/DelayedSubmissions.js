import axios from 'axios';
import {useEffect, useState} from 'react';

export default function DelayedSubmissions(){
    const [CheckOutBooks,setCheckOutBooks]=useState([]);


    const fetchCheckOutBooks=async()=>
    {
        const response = await axios.get('http://localhost:8080/getDelayedCheckOutBooks');
        setCheckOutBooks(response.data);
    }

    useEffect(()=>{
        fetchCheckOutBooks();
},[])

    return(
        <div>
            <h2>Delayed Submissions</h2>
            {CheckOutBooks.map((checkOut,index) => (
                <div>
                <p>Member Name : {checkOut.memberName}</p>
                <p>Member Id : {checkOut.memberId}</p>
                <p>Book Name : {checkOut.bookName}</p>
                <p>Book Id : {checkOut.bookId}</p>
                <p>Author : {checkOut.bookAuthor}</p>
                <p>Check-Out-Date : {checkOut.checkOutDate}</p>
                <p>Check-In-Date : {checkOut.checkInDate}</p>
                <br/>
                </div>
            ))}
        </div>
    );
}