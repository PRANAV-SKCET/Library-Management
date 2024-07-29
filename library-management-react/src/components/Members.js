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

    const containerStyle = {
        width: '100%',
        height: '100vh',
        margin: '0',
        padding: '0',
        backgroundImage: 'url("https://wallpapercrafter.com/desktop/12511-books-library-shelves-lighting-4k.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const innerContainerStyle = {
        width: '80%',
        maxWidth: '800px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent box
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        overflowY: 'auto', // Adds scrolling if content overflows
        maxHeight: '80vh', // Keeps the inner box from becoming too tall
    };

    const listStyle = {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    };

    const memberBoxStyle = {
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent box for each member
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    };

    const infoBoxStyle = {
        padding: '10px',
        margin: '5px 0',
        backgroundColor: 'rgba(245, 245, 245, 0.9)',
        borderRadius: '4px',
    };

    const titleStyle = {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    };

    const textStyle = {
        color: '#333',
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <h2 style={titleStyle}>Our Library Members</h2>
                {applications.length > 0 ? (
                    <ul style={listStyle}>
                        {applications.map((application, index) => (
                            <li key={index} style={memberBoxStyle}>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Name:</strong> {application.name}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Mobile Number:</strong> {application.mobileNumber}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Member Id:</strong> {application.memberId}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Email:</strong> {application.email}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Date of Birth:</strong> {application.dateOfBirth}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Address:</strong> {application.address}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Gender:</strong> {application.gender}</div>
                                <div style={{ ...infoBoxStyle, ...textStyle }}><strong>Status:</strong> {application.status}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No Members Present</p>
                )}
            </div>
        </div>
    );
}
