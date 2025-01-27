import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 28.459497,
  lng: 77.026634,
};

function Globalmap() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This ensures Google Maps API script is loaded and ready
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCyMrVtiLgr0ywJWHQClgUgtgunWZMlopQ&libraries=places`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => console.error("Failed to load Google Maps API");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!isLoaded) {
    return <div>Loading Map...</div>; // Loading text or spinner until the map is ready
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {/* Example Marker */}
      <Marker position={{ lat: 59.955413, lng: 30.337844 }} />
    </GoogleMap>
  );
}

export default Globalmap;
