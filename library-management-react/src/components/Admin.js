import React, { useState } from 'react';
import axios from 'axios';
import '../cssfolder/Admin.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context';
import { useContext } from 'react';

export default function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setIsAdminLoggedIn} = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/adminLogin', {
                email,
                password
            });

            if(response.data===true)
            {
                setError("Login Successfull");
                setTimeout(() => {
                    setIsAdminLoggedIn(true);
                    navigate("/adminHome");
                }, 1000);
            }
            else{
                setError('Invalid Credentials');
            }

        } catch (error) {
            setError('Failed to Login!');
        }
    };

    return (
        <div className="admin-body">
            <div className="admin-container">
                <h1>Admin Login</h1>
                <form className="admin-form" onSubmit={handleSubmit}>
                    <div className="admin-form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="admin-form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    {error && <p className="admin-error-message">{error}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}
