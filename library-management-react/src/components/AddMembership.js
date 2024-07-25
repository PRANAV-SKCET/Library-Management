import axios from 'axios';
import {useEffect, useState} from 'react';

export default function AddMembership()
{
    // const [applications,setApplications]=useState([]);

    // const fetchApplications = async()=>{
    //     const response = await axios.get(`http://localhost:/8080/getPendingMembership`);
    //     // setApplications(response.data);
    //     console.log(applications);
    //     console.log(response.data);
    // }
    // useEffect(()=>
    // {
    //     fetchApplications();
    // },[])
    return(
        <div>
            <h2>Membership Applications for Approval</h2>
        </div>
    );
}