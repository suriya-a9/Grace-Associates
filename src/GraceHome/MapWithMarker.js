import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapWithMarker = () => {
    const [markerPosition, setMarkerPosition] = useState({
        lat: 10.997987865281942, 
        lng: 76.99530768337391,
    });

    const handleMapClick = (event) => {
        setMarkerPosition({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    };

    const mapContainerStyle = {
        width: "100%",
        height: "500px",
    };

    const center = {
        lat: 10.997987865281942, 
        lng: 76.99530768337391,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDbZcQiUQy-YyCN08yz8OQxQd4z4eRmMqA">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
                onClick={handleMapClick}
            >
                <Marker position={markerPosition} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapWithMarker;