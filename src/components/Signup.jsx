import React, { useState } from 'react';
import { Button, message } from 'antd';
import 'antd/dist/reset.css';
import './Auth.css'; // Import custom CSS for Auth components
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Make sure you have axios installed

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                email,
                password,
            });

            // Handle successful signup
            if (response.status === 201) {
                message.success('Signup successful! You can now log in.');
                navigate('/login'); // Navigate to the login page
            }
        } catch (error) {
            // Handle error responses
            if (error.response) {
                message.error(error.response.data.message || 'Signup failed. Please try again.');
            } else {
                message.error('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-sm">
                <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSignup}> {/* Attach the handleSignup function */}
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Update state on change
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on change
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update state on change
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <Button type="primary" className="w-full bg-green-500 hover:bg-green-600 hover:text-white mt-4" htmlType="submit">
                        Sign Up
                    </Button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? 
                    <a href="/login" className="text-green-500"> Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
