import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, CircleMarker, Popup, useMap } from "react-leaflet";

export default function TrackerMap({position,tracking,follow}) {
  
  function GpsLayer({ position, tracking, follow }) {
    const map = useMap();

    useEffect(() => {
      if (tracking && follow && position) {
        // Preserve the user's zoom level.
        map.panTo([position.lat, position.lng], { animate: false });
      }
    }, [map, position, tracking, follow]);

    if (!position) return null;

    const center = [position.lat, position.lng];
    const color = tracking ? "#2563eb" : "#64748b";

    return (
      <>
        <Circle
          center={center}
          radius={position.accuracy}
          pathOptions={{
            color,
            weight: 1,
            fillColor: color,
            fillOpacity: 0.12,
          }}
          interactive={false}
        />

        <CircleMarker
          center={center}
          radius={8}
          pathOptions={{
            color: "#ffffff",
            weight: 3,
            fillColor: color,
            fillOpacity: 1,
          }}
        >
          <Popup>
            {tracking ? "Your location" : "Last known location"}
            <br />
            Accuracy: ±{Math.round(position.accuracy)} m
            <br />
            Updated: {new Date(position.timestamp).toLocaleTimeString()}
          </Popup>
        </CircleMarker>
      </>
    );
  }
  
  return ( 
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={13}
      style={{ height: "65vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Keep your existing BioScout layers here. */}

      <GpsLayer
        position={position}
        tracking={tracking}
        follow={follow}
      />
    </MapContainer>  
  )
}