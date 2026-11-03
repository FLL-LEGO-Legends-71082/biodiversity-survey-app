import { useEffect, useState } from "react";

export function useLiveGps() {
  const [tracking, setTracking] = useState(false);
  const [position, setPosition] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!tracking) return;

    if (!window.isSecureContext || !navigator.geolocation) {
      setError(
        !window.isSecureContext
          ? "Location requires HTTPS or localhost."
          : "This browser does not support location."
      );
      setTracking(false);
      return;
    }

    // Ignore callbacks queued before Stop or unmount.
    let active = true;
    let watchId;

    try {
      watchId = navigator.geolocation.watchPosition(
        ({ coords, timestamp }) => {
          if (!active) return;

          setPosition({
            lat: coords.latitude,
            lng: coords.longitude,
            accuracy: coords.accuracy,
            timestamp,
          });
          setError("");
        },
        (err) => {
          if (!active) return;

          const messages = {
            1: "Location permission denied. Allow location in browser settings, then start again.",
            2: "Location unavailable. Waiting for another update.",
            3: "Location timed out. Waiting for another update.",
          };

          setError(messages[err.code] ?? "Unable to get your location.");

          // Permission denial is terminal; other errors can recover.
          if (err.code === 1) {
            active = false;
            if (watchId !== undefined) {
              navigator.geolocation.clearWatch(watchId);
            }
            setTracking(false);
          }
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 15000,
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start location.");
      setTracking(false);
    }

    return () => {
      active = false;
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [tracking]);

  function start() {
    setPosition(null);
    setError("");
    setTracking(true);
  }

  function stop() {
    setTracking(false);
  }

  return { tracking, position, error, start, stop };
}