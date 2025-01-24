import React from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Globalmap() {
  const defaultProps = {
    center: {
      lat: 28.459497,
      lng: 77.026634,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default Globalmap;
