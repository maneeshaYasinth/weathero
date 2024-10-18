import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import cloudy from "../assets/cloudy.jpg";
import useCurrentLocation from "./currentLocation";

const DummyLayout = () => {
    const [latitude, longitude] = useCurrentLocation();
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Loading...");
    
    const API_KEY = import.meta.env.VITE_GEOCODE_API_KEY;
    // console.log("API Key:", API_KEY); // Debugging log
    

    useEffect(() => {
        console.log("Latitude:", latitude, "Longitude:", longitude);
    }, [latitude, longitude]);

    useEffect(() => {
        if (latitude && longitude) {
            axios
                .get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
                )
                .then((response) => {
                    const components = response.data.results[0].components;
                    setCity(components.city || components.town || components.village || "Unknown Location");
                })
                .catch((error) => console.error("Error fetching city name:", error));
        }
    }, [latitude, longitude]);

    useEffect(() => {
        if (latitude && longitude) {
            axios
                .get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
                )
                .then((response) => setWeather(response.data))
                .catch((error) => console.error("Error fetching weather:", error));
        }
    }, [latitude, longitude]);

    if (!latitude || !longitude) {
        return <div>Fetching your location...</div>;
    }

    if (!weather) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${cloudy})` }}
        >
            <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-4xl sm:text-6xl md:text-8xl font-pixelify italic font-extrabold pr-4">
                    WEATHERO
                </h1>
                <FontAwesomeIcon icon={faWind} className="text-gray-700 text-3xl sm:text-5xl md:text-7xl" />
            </div>
            <div className="flex items-center justify-center h-full">
                <div className="backdrop-blur bg-white/10 p-4 sm:p-8 rounded-xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4">
                        {city}
                    </h2>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-15xl font-bold text-gray-700">
                        <h1>{`${weather.hourly.temperature_2m[0]}°C`}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DummyLayout;
