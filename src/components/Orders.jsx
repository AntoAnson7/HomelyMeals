import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Card, message, Spin } from 'antd';
import OrderCard from './OrderCard';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch orders from the backend
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/orders/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setOrders(response.data);
            } catch (error) {
                message.error("Failed to fetch orders");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white p-6 mt-20">
            <h1 className="text-2xl text-white font-bold mb-4">My Orders</h1>
            {loading ? (
                
                    <Spin size="large" />
                
            ) : (
                <>
                {orders.length==0&&
                <div className="">
                    <h1 className="text-xl font-bold mb-2">You have'nt placed any orders yet!</h1>
                    <p>To place order visit our <span style={{textDecoration:'underline'}}>menu</span></p>
                </div>}
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={orders}
                    renderItem={(order) => (
                        <List.Item>
                          <OrderCard order={order}/>
                        </List.Item>
                    )}
                />
                </>
            )}
        </div>
    );
};

export default Orders;
