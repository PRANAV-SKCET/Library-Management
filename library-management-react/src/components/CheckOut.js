import { useContext, useState } from "react";
import MemberNavbar from "./MemberNavbar";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { AuthContext } from "./context";

export default function CheckOut(){
    const [mobileNumber,setMobileNumber]=useState('');
    const [message,setMessage]=useState('');
    const {setMemberMobileNumber,memberMobileNumber}=useContext(AuthContext);
    const navigate = useNavigate();
    const handleVerify=async()=>
    {
        const response=await axios.post('http://localhost:8080/verifyMember',null,
            {
                params:{
                    mobileNumber:mobileNumber
                }
            }
        );

        setMessage(response.data);
        if(response.data==="Member Verified")
        {
            setMemberMobileNumber(mobileNumber);
            setTimeout(()=>{
                navigate("/checkOutFinal");
            },500)
        }
    }
    return(
        <div>
            <MemberNavbar/>
            <h2>CheckOut</h2>
            <label>Mobile Number</label>
            <input type="text" 
            placeholder="Enter your Mobile Number" 
            value={mobileNumber} 
            onChange={(e)=>setMobileNumber(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {message}
        </div>
    );
}