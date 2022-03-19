import React from "react";
import "../../styles/map.scss";
import L from "leaflet";
import { Marker, MapContainer, Polyline, Popup } from "react-leaflet";

const center = [55.756179, 37.61588];

const polyline = [
  [55.756179, 37.61588],
  [55.731357, 37.576579],
];

const limeOptions = { color: "red" };

export default function LeafletMap() {
  // указываем путь к файлам marker
  L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

  return (
    <div className="map_wrapper">
      <MapContainer center={center} zoom={13}>
        <Marker position={[55.756179, 37.61588]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[55.731357, 37.576579]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Polyline pathOptions={limeOptions} positions={polyline} />
      </MapContainer>
    </div>
  );
}
