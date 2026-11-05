
import { useState,useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import TrackerMap from "../components/TrackerMap";

// Distance between GPS coordinates in meters
function distanceMeters(a, b) {
  const R = 6371000;
  const rad = Math.PI / 180;
  const dLat = (b[0] - a[0]) * rad;
  const dLng = (b[1] - a[1]) * rad;

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(a[0] * rad) *
      Math.cos(b[0] * rad) *
      Math.sin(dLng / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(h));
}

export default function GPSTracker() {
  
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [path, setPath] = useState([]);
  const [tracking, setTracking] = useState(false);
  const [follow, setFollow] = useState(true);
  const [error, setError] = useState("");

  const watchId = useRef(null);
  const lastPoint = useRef(null);
  const lastTimestamp = useRef(0);

  function startTracking() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    if (watchId.current !== null) return;

    setError("");

    watchId.current = navigator.geolocation.watchPosition(
      (result) => {
        const { latitude, longitude, accuracy } =
          result.coords;

        const point = [latitude, longitude];

        setPosition(point);
        setAccuracy(accuracy);

        // Ignore inaccurate GPS readings for the trail
        if (accuracy > 30) return;

        // Ignore older or duplicate readings
        if (result.timestamp <= lastTimestamp.current) {
          return;
        }

        // Avoid drawing GPS jitter as movement
        if (
          lastPoint.current &&
          distanceMeters(lastPoint.current, point) < 5
        ) {
          return;
        }

        lastPoint.current = point;
        lastTimestamp.current = result.timestamp;

        setPath((previous) => [...previous, point]);
      },
      (err) => {
        setError(err.message);

        if (err.code === 1) {
          stopTracking();
        }
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000
      }
    );

    setTracking(true);
  }

  function stopTracking() {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }

    setTracking(false);
  }

  function clearPath() {
    setPath([]);
    lastPoint.current = null;
    lastTimestamp.current = 0;
  }

  useEffect(() => {
    return () => {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(watchId.current);
      }
    };
  }, []);

  const totalDistance = path.reduce((sum, point, i) => {
    if (i === 0) return 0;
    return sum + distanceMeters(path[i - 1], point);
  }, 0);

  return (
    <div>

      <div style={{ marginBottom: 12 }}>
        <button onClick={startTracking} disabled={tracking}>
          Start Tracking
        </button>

        <button onClick={stopTracking} disabled={!tracking}>
          Stop Tracking
        </button>

        <button onClick={clearPath}>
          Clear Path
        </button>
      </div>

      <label>
        <input
          type="checkbox"
          checked={follow}
          onChange={(e) => setFollow(e.target.checked)}
        />
        Follow My Location
      </label>

      <p>Status: {tracking ? "Tracking" : "Stopped"}</p>
      <p>GPS points: {path.length}</p>
      <p>Distance: {totalDistance.toFixed(1)} meters</p>

      {accuracy !== null && (
        <p>GPS accuracy: ±{accuracy.toFixed(1)} m</p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <TrackerMap
        position={position}
        path={path}
        accuracy={accuracy}
        follow={follow}
      />
    </div>

  );
}