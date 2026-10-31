
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

function SurveyMap({latitude,longitude}) {

  const position = [latitude,longitude]

  return (
    <MapContainer
      center={position}
      zoom={15}
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
        <Popup> Monarch Butterfly </Popup>
      </Marker>
    </MapContainer>
  )
}

export default SurveyMap