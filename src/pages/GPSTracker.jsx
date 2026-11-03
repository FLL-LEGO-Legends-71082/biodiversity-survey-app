
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { useLiveGps } from "../components/LiveGPS";
import TrackerMap from "../components/TrackerMap";

export default function GPSTracker() {
  
  const gps = useLiveGps();
  const [follow, setFollow] = useState(true);

  return (
    <section aria-label="Tracker map">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 8,
        }}
      >
        <button
          type="button"
          onClick={gps.tracking ? gps.stop : gps.start}
        >
          {gps.tracking ? "Stop tracking" : "Start tracking"}
        </button>

        <label>
          <input
            type="checkbox"
            checked={follow}
            onChange={(event) => setFollow(event.target.checked)}
          />{" "}
          Follow Me
        </label>

        <span role="status">
          {gps.error ||
            (gps.tracking
              ? gps.position
                ? `Tracking · ±${Math.round(gps.position.accuracy)} m`
                : "Finding your location…"
              : "Tracking off")}
        </span>

        <TrackerMap
          position={gps.position}
          tracking={gps.tracking}
          follow={follow}
        />
      </div>

    </section>
  );
}