import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Members() {
    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getMembers');
            setApplications(response.data);
        } catch (error) {
            console.error('There was an error fetching the applications!', error);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <div>
            <h2>Our Library Members</h2>
            {applications.length > 0 ? (
                <ul>
                    {applications.map((application, index) => (
                        <li key={index}>
                            <p><strong>Name:</strong> {application.name}</p>
                            <p><strong>Mobile Number:</strong> {application.mobileNumber}</p>
                            <p><strong>Member Id:</strong> {application.memberId}</p>
                            <p><strong>Email:</strong> {application.email}</p>
                            <p><strong>Date of Birth:</strong> {application.dateOfBirth}</p>
                            <p><strong>Address:</strong> {application.address}</p>
                            <p><strong>Gender:</strong> {application.gender}</p>
                            <p><strong>Status:</strong> {application.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Members Present</p>
            )}
        </div>
    );
}
