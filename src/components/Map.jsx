import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container styles
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Map center location
const center = {
  lat: 28.6139, // Latitude (New Delhi, India)
  lng: 77.209,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Example Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
