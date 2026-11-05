import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons in Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

export default function TrackerMap({position,path,accuracy,follow}) {
  // Move the map as the user walks
  function FollowLocation({ position, follow }) {
    const map = useMap();

    useEffect(() => {
      if (follow && position) {
        map.panTo(position);
      }
    }, [map, position, follow]);

    return null;
  }
  
  return ( 
    <MapContainer
      center={[39.27, -76.8]}
      zoom={16}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {position && (
        <>
          <Marker position={position} />

          {accuracy !== null && (
            <Circle
              center={position}
              radius={accuracy}
              pathOptions={{
                color: "blue",
                fillOpacity: 0.1
              }}
            />
          )}
        </>
      )}

      {path.length >= 2 && (
        <Polyline
          positions={path}
          pathOptions={{
            color: "blue",
            weight: 5
          }}
        />
      )}

      <FollowLocation
        position={position}
        follow={follow}
      />
    </MapContainer>
  )
}