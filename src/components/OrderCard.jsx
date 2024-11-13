import React from 'react';
import { Card, Progress,Button,message } from 'antd';
import axios from 'axios';

const OrderCard = ({ order }) => {
    // Dummy progress status values
    const progressStatus = {
        'Order Received': 35,
        'Out for Delivery': 50,
        'Delivered': 100,
    };

    // Set default order state to "Order Received" (0% progress)
    const currentStatus = 'Order Received';
    const currentProgress = progressStatus[currentStatus];

    const CancelOrder=async()=>{
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/orders/${order.id}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            message.success('Order cancelled!')

            setTimeout(() => {
                window.location.reload();
            },800)
        } catch (error) {
            message.error("Failed to delete order!");
        }
    }

    return (
        <Card
            title={<h2 style={{ color: '#ffffff' }} className="text-xl font-semibold">{order.food_name}</h2>}
            style={{
                backgroundColor: '#1F2937', // bg-gray-900
                border: 'none',
                color: '#ffffff',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
            }}
            hoverable
            bodyStyle={{ padding: '16px' }} // Custom body padding
        >
            <p style={{ color: '#B0B0B0', marginBottom: '8px' }}>
                <strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}
            </p>
            <p style={{ color: '#B0B0B0', marginBottom: '8px' }}>
                <strong>Quantity:</strong> {order.quantity}
            </p>
            <p style={{ color: '#B0B0B0', marginBottom: '8px' }}>
                <strong>Total Amount:</strong> ₹{order.total_amount}
            </p>
            <p style={{ color: '#B0B0B0', marginBottom: '16px' }}>
                <strong>Status:</strong> {order.status}
            </p>

            {/* Dummy Progress Bar */}
            <Progress
                percent={currentProgress}
                showInfo={false}
                strokeColor={{
                    '0%': '#FFBF00',     // Yellow for "Order Received"
                    '50%': '#F59E0B',    // Darker Yellow for "Out for Delivery"
                    '100%': '#10B981',   // Green for "Delivered"
                }}
                style={{ marginBottom: '8px', borderRadius: '4px' }}
            />
            <p style={{ textAlign: 'center', color: '#B0B0B0', fontSize: '14px', marginTop: '8px' }}>
                {currentStatus}
            </p>

            <Button onClick={CancelOrder} className="mt-4 mb-15 bg-green-500 hover:bg-green-600 rounded-md px-3 py-1" style={{border:'None',outline:'None'}}>
                Cancel Order
            </Button>
        </Card>
    );
};

export default OrderCard;
