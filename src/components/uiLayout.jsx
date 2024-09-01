import React from "react";
import rainyDay from '../assets/rainyday.jpg';

const DummyLayout = () => {
    const blurStyle = {
        backgroundColor: 'rgba(156, 163, 175, 0.8)', // Semi-transparent gray
        backdropFilter: 'blur(5px)', // Adjust blur intensity as needed
        padding: '3rem', // Equivalent to p-12 in Tailwind
        borderRadius: '0.5rem', // Equivalent to rounded-lg in Tailwind
        display: 'flex', // Equivalent to flex in Tailwind
        alignItems: 'center', // Equivalent to items-center in Tailwind
    };

    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center "
            style={{ backgroundImage: `url(${rainyDay})` }}
        >
            <div style={blurStyle}>
                <div>
                    <h2 className="text-6xl font-bold transform -rotate-90 mt-0 mb-0">Colombo</h2>
                </div>

                <div className="text-6xl font-bold text-gray-600 text-center ml-4">
                    <h1 className="text-15xl">27°</h1>
                </div>
            </div>
        </div>
    );
};

export default DummyLayout;
