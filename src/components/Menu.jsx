import React, { useEffect, useState } from 'react';
import { Input, Select, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import FoodCard from './FoodCard'; // Import the FoodCard component
import axios from 'axios'; // Make sure axios is installed
import { useDispatch } from 'react-redux';
import { setMenuItems } from '../Redux/menuSlice'; // Import your action to set menu items in Redux

const { Option } = Select;

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('rating'); // Default sorting by rating
    const [foodOptions, setFoodOptions] = useState([]); // State to hold food options
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchFoodOptions = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cuisines/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in the Authorization header
                    },
                });

                setFoodOptions(response.data); // Assuming the response data is the food options array
                dispatch(setMenuItems(response.data)); // Dispatch action to set menu items in Redux
            } catch (error) {
                // Handle errors (e.g., display error message)
                if (error.response && error.response.status === 401) {
                    message.error('Unauthorized. Please log in again.');
                    // Optionally, redirect to login page
                } else {
                    message.error('Failed to fetch menu items.');
                }
                console.error(error);
            }
        };

        fetchFoodOptions();
    }, [dispatch]);

    const filteredOptions = foodOptions.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedOptions = filteredOptions.sort((a, b) => {
        if (sortOption === 'rating') {
            return b.rating - a.rating; // Sort by rating (highest first)
        } else if (sortOption === 'priceLow') {
            return a.averageAmount - b.averageAmount; // Sort by price (low to high)
        } else if (sortOption === 'priceHigh') {
            return b.averageAmount - a.averageAmount; // Sort by price (high to low)
        } else if (sortOption === 'name') {
            return a.name.localeCompare(b.name); // Sort by name
        }
        return 0;
    });

    return (
        <div className="bg-black text-white p-6 pt-20 mt-20">
            {/* Search and Filter Section */}
            <div className="flex mb-4">
                <Input
                    placeholder="Search for cuisines..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="bg-gray-700 text-black border border-gray-600 rounded-md mr-2"
                    prefix={<SearchOutlined className="text-gray-400" />}
                />
                <Select
                    value={sortOption}
                    onChange={value => setSortOption(value)}
                    className="bg-gray-700 text-white border border-gray-600 rounded-md"
                >
                    <Option value="rating">Sort by Rating</Option>
                    <Option value="priceLow">Sort by Price: Low to High</Option>
                    <Option value="priceHigh">Sort by Price: High to Low</Option>
                    <Option value="name">Sort by Name</Option>
                </Select>
            </div>

            {/* Food Options Cards */}
            <div className="grid grid-cols-1 gap-4">
                {sortedOptions.map(option => (
                    <FoodCard
                        key={option.id}
                        name={option.name}
                        rating={option.rating}
                        deliverable={option.deliverable}
                        description={option.description}
                        average_amount={option.average_amount}
                        dietary_type={option.dietary_type}
                        foodId={option.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
