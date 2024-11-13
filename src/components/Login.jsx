import React, { useState } from 'react';
import { Button, message } from 'antd';
import 'antd/dist/reset.css';
import './Auth.css'; // Import custom CSS for Auth components
import axios from 'axios'; // Make sure axios is installed
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            });
            localStorage.setItem('token',response.data.access );
            message.success('Login successful!');
            navigate('/menu')
        } catch (error) {
            if(error.response.status==403){
                navigate('/forbidden')
            }
            else{
                message.error('Login failed. Please check your credentials.');
                console.error(error);
            }

        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-sm">
                <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <Button type="primary" htmlType="submit" className="w-full bg-green-500 hover:bg-green-600 hover:text-white mt-4">
                        Sign In
                    </Button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? 
                    <a href="/signup" className="text-green-500"> Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
