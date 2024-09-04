import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import rainyDay from '../assets/rainyday.jpg';
import cloudy from '../assets/cloudy.jpg';
import rain_drops from '../assets/rain drops.jpeg';

const DummyLayout = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${cloudy})` }}
        >
            <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4">
                <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-4xl sm:text-6xl md:text-8xl font-pixelify italic font-extrabold pr-4">WEATHERO</h1>
                <FontAwesomeIcon icon={faWind} className="text-white text-3xl sm:text-5xl md:text-7xl" style={{color: "#23262d",}} />
            </div>
            <div className="flex items-center justify-center h-full">
                <div className="backdrop-blur bg-white/10 p-4 sm:p-8 rounded-xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4">
                        Colombo
                    </h2>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-15xl font-bold text-gray-700">
                        <h1>27°</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DummyLayout;
