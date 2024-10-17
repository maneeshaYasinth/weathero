import { useState, useEffect } from "react";

const useCurrentLocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null, error: null });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation({ ...location, error: "Geolocation is not supported" });
            return;
        }

        const onSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude, error: null });
        };

        const onError = (error) => {
            setLocation({ ...location, error: error.message });
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return [location.latitude, location.longitude, location.error];
};

export default useCurrentLocation;
