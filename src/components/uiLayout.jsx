import React from "react";
import rainyDay from '../assets/rainyday.jpg';

const DummyLayout = () => {
    const blurStyle = {
        backgroundColor: 'rgba(156, 163, 175, 0.8)', // Semi-transparent gray
        backdropFilter: 'blur(5px)', // Adjust blur intensity as needed
        padding: '2rem', // Adjust padding for smaller screens
        borderRadius: '0.5rem', // Equivalent to rounded-lg in Tailwind
        display: 'flex', // Equivalent to flex in Tailwind
        alignItems: 'center', // Equivalent to items-center in Tailwind
        flexDirection: 'column', // Stack items vertically on smaller screens
        maxWidth: '90%', // Limit width to avoid overflowing on larger screens
        textAlign: 'center', // Center text for better readability
        margin: '0 auto', // Center the box horizontally
    };

    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${rainyDay})` }}
        >
            <div style={blurStyle}>
                {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transform -rotate-90 mb-4">
                    Colombo
                </h2> */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-15xl font-bold text-gray-600">
                    <h1>27°</h1>
                </div>
            </div>
        </div>
    );
};

export default DummyLayout;
