import { useState } from 'react'
import SurveyMap from '../components/SurveyMap'

function MapPage({ observations = [] }) {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function getLocation() {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return
    }

    setError('')
    setLoading(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setLoading(false)
      },
      (error) => {
        setError(`Unable to get location: ${error.message}`)
        setLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    )
  }

  return (
    <main className="page">
      <h1>🗺️ Survey Map</h1>

      <button
        type="button"
        onClick={getLocation}
        disabled={loading}
      >
        {loading ? 'Getting location...' : '📍 Use My Location'}
      </button>

      {error && <p role="alert">{error}</p>}

      {latitude !== null && longitude !== null ? (
        <SurveyMap
          latitude={latitude}
          longitude={longitude}
        />
      ) : (
        <p>Click "Use My Location" to display the map.</p>
      )}
    </main>
  )
}
export default MapPage