import React from 'react';
import { ReactComponent as ForbiddenIcon } from './forbidden-icon.svg'; // Make sure to have this SVG file
import './Forbidden.css'

const Forbidden = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
            <ForbiddenIcon className="w-24 h-24 mb-4" />
            <h1 className="text-3xl font-bold mb-2">Too Many Login Requests</h1>
            <p className="text-lg">You have reached the maximum number of login attempts. Please try again later after 1 minute.</p>
        </div>
    );
};

export default Forbidden;
