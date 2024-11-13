import React from 'react';
import axios from 'axios';
import { Rate, Button, message } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const FoodCard = ({ name, rating, deliverable, description, average_amount, dietary_type, foodId }) => {
    // Calculate the number of filled stars based on rating (use Math.floor)
    const filledStars = Math.floor(rating);

    // Function to place an order
    const placeOrder = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/orders/', // Adjust this URL based on your backend setup
                {
                    food_name: name,
                    quantity: 1,  // or any quantity the user selects
                    total_amount: average_amount,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Use the stored token for authentication
                    },
                }
            );
            message.success('Order placed successfully!');
        } catch (error) {
            message.error('Failed to place order');
        }
    };

    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex">
            <img
                src="https://via.placeholder.com/150"
                alt={name}
                className="w-1/3 rounded-lg mr-4"
            />
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <Rate
                    disabled
                    defaultValue={filledStars}
                    count={5}
                    className="mb-2"
                    style={{ color: '#FFBF00' }} // Set color for stars
                />
                <p className={`text-sm ${deliverable ? 'text-green-500' : 'text-red-500'}`}>
                    {deliverable ? 'Currently Deliverable' : 'Not Deliverable'}
                </p>
                <p className="text-gray-300 mb-4">{description}</p>
                <p className="text-sm text-gray-400">Average Amount: ₹{parseInt(average_amount)} per person</p>
                <p className={`mt-2 flex items-center`}>
                    {dietary_type === 'Veg' ? (
                        <CheckCircleOutlined className="text-green-500 mr-1" />
                    ) : (
                        <CloseCircleOutlined className="text-red-500 mr-1" />
                    )}
                    {dietary_type === 'Veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                </p>
                <Button className="mt-4 bg-green-500 hover:bg-green-600 rounded-md px-3 py-1" style={{ border: "none" }}>
                    See More
                </Button>

                <Button
                    className="mt-4 ml-10 bg-green-500 hover:bg-green-600 rounded-md px-3 py-1"
                    style={{ border: "none" }}
                    onClick={placeOrder}
                >
                    Place Order
                </Button>
            </div>
        </div>
    );
};

export default FoodCard;
