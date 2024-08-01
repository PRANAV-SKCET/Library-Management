import axios from 'axios';
import { useEffect, useState } from 'react';
import '../cssfolder/Members.css'; // Import your CSS file

export default function Members() {
    const [applications, setApplications] = useState([]);
    const [hoveredMember, setHoveredMember] = useState(null);

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

    const handleMouseEnter = (application) => {
        setHoveredMember(application);
    };

    const handleMouseLeave = () => {
        setHoveredMember(null);
    };

    // Separate the applications into two arrays
    const firstThree = applications.slice(0, 3);
    const remaining = applications.slice(3);

    return (
        <div className="Members">
            <h2>Our Library Members</h2>

            {/* Display the first three members with hover effect */}
            <div className="first-three">
                <h3>First Three Members</h3>
                {firstThree.length > 0 ? (
                    <ul>
                        {firstThree.map((application, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => handleMouseEnter(application)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <p><strong>Member {index + 1}</strong></p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No Members Present</p>
                )}
            </div>

            {/* Display the remaining members without hover effect */}
            {remaining.length > 0 && (
                <div className="remaining">
                    <h3>Library Members</h3>
                    <div className="remaining-container">
                        {remaining.map((application, index) => (
                            <div key={index} className="remaining-item">
                                <p><strong>Name:</strong> {application.name}</p>
                                <p><strong>Mobile Number:</strong> {application.mobileNumber}</p>
                                <p><strong>Member Id:</strong> {application.memberId}</p>
                                <p><strong>Email:</strong> {application.email}</p>
                                <p><strong>Date of Birth:</strong> {application.dateOfBirth}</p>
                                <p><strong>Address:</strong> {application.address}</p>
                                <p><strong>Gender:</strong> {application.gender}</p>
                                <p><strong>Status:</strong> {application.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Hover effect box */}
            {hoveredMember && (
                <div className="hover-box">
                    <div className="hover-content">
                        <p><strong>Name:</strong> {hoveredMember.name}</p>
                        <p><strong>Mobile Number:</strong> {hoveredMember.mobileNumber}</p>
                        <p><strong>Member Id:</strong> {hoveredMember.memberId}</p>
                        <p><strong>Email:</strong> {hoveredMember.email}</p>
                        <p><strong>Date of Birth:</strong> {hoveredMember.dateOfBirth}</p>
                        <p><strong>Address:</strong> {hoveredMember.address}</p>
                        <p><strong>Gender:</strong> {hoveredMember.gender}</p>
                        <p><strong>Status:</strong> {hoveredMember.status}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
