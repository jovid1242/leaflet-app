import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";

export default function LeafletMap() {
  const [position, setPosition] = useState({
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10,
  });

  var center = [position.lat, position.lng];
  return (
    <div className="map_wrapper">
      <Map
        zoom={position.zoom}
        center={center}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
    </div>
  );
}
