import React, { useState } from 'react';
import { Switch, Select } from 'antd';
import 'antd/dist/reset.css'; // Ant Design reset styles
import { EnvironmentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Option } = Select;

const Navbar = () => {
    const navigate = useNavigate()
    const [isDelivery, setIsDelivery] = useState(true);
    const [location, setLocation] = useState('Select Location');

    const handleDeliveryPickupToggle = (checked) => {
        setIsDelivery(checked);
    };

    const handleLocationChange = (value) => {
        setLocation(value);
    };

    const Logout=()=>{
        localStorage.removeItem('token')
        window.location.reload()
    }

    // List of cities in Kerala, India
    const cities = [
        'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 
        'Palakkad', 'Kannur', 'Kottayam', 'Malappuram', 'Pathanamthitta', 'Idukki', 
        'Kasargod', 'Varkala', 'Guruvayur', 'Munnar', 'Wayanad', 'Chengannur'
    ];

    return (
        <nav className="bg-[#1a1a1a] shadow-[0_2px_4px_rgba(255,255,255,0.1)] text-white fixed top-0 w-full z-50 py-3">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Left: Logo */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold text-white" style={{ margin: 0,cursor:'pointer' }} onClick={()=>navigate('/')}>
                        Foody <span style={{ color: 'rgb(34, 197, 94)' }}>Eats</span>
                    </h1>
                </div>

                {/* Middle: Delivery/Pickup Toggle, Location Select, and Search Bar */}
                <div className="flex items-center space-x-8 mx-8">
                    {/* Delivery/Pickup Toggle */}
                    <div className="flex items-center">
                        <Switch
                            checked={isDelivery}
                            onChange={handleDeliveryPickupToggle}
                            checkedChildren="Delivery"
                            unCheckedChildren="Pickup"
                            className="custom-switch"
                            style={{
                                backgroundColor: isDelivery ? 'rgb(34, 197, 94)' : 'rgb(75, 85, 99)', // Toggle color (green if delivery)
                                borderRadius: '20px',
                                width: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                    </div>

                    {/* Set Location */}
                    <div className="flex items-center space-x-2">
                        <EnvironmentOutlined className="text-white" />
                        <Select
                            defaultValue={location}
                            onChange={handleLocationChange}
                            className="w-40"
                            showSearch
                            optionFilterProp="children"
                            style={{ 
                                backgroundColor: '#1f2a38',
                                borderRadius: '20px',
                                padding: '5px',
                                height:'35px',
                                width: '200px',
                            }}
                            placeholder="Select City"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            {cities.map(city => (
                                <Option key={city} value={city}>
                                    {city}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search for food..."
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-full focus:outline-none focus:border-gray-500 text-white"
                        />
                    </div>
                </div>

                {/* Right: Links and User Actions */}
                <div className="flex items-center space-x-6">
                    <a onClick={()=>navigate("/menu")} className="text-gray-300 hover:text-green-400 font-medium" style={{cursor:'pointer'}}>
                        Menu
                    </a>
                    <a onClick={()=>navigate("/orders")} className="text-gray-300 hover:text-green-400 font-medium" style={{cursor:'pointer'}}>
                        Orders
                    </a>
                    <a onClick={()=>navigate("/login")} className="text-gray-300 hover:text-green-400 font-medium" style={{cursor:'pointer'}}>
                        Sign In
                    </a>
                    {localStorage.getItem('token')&&<button onClick={Logout} className="px-4 py-2 bg-green-500 text-black rounded-full hover:bg-gray-700 hover:text-white" style={{cursor:'pointer'}}>
                        Log out
                    </button>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
