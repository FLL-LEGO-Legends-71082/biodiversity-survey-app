
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

function SurveyMap() {

  const position = [39.25, -76.85]

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "400px",
        width: "100%"
      }}
    >

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
            BioScout Observation
        </Popup>
      </Marker>

    </MapContainer>
  )
}

export default SurveyMap