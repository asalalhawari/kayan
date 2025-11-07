import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const pin = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
const pinMB = L.icon({
  iconUrl: pin,
  iconSize: [24, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -40],
})

const countries = {
  palestine: { name: "Palestine", flag: "🇵🇸", capital: "Jenin", presence: "Regional office in Jenin serving northern Palestine.", location: [32.4663, 35.3009] },
  uae: { name: "United Arab Emirates", flag: "🇦🇪", capital: "Dubai", presence: "Headquarters in Dubai with regional offices in Abu Dhabi and Sharjah.", location: [25.276987, 55.296249] },
  saudi: { name: "Saudi Arabia", flag: "🇸🇦", capital: "Riyadh", presence: "Primary operations in Riyadh with branches in Jeddah and Dammam.", location: [26.2172, 50.1971] },
  oman: { name: "Oman", flag: "🇴🇲", capital: "Muscat", presence: "Regional office in Muscat serving the entire Sultanate.", location: [23.588, 58.3829] },
  qatar: { name: "Qatar", flag: "🇶🇦", capital: "Doha", presence: "Regional office in Doha serving Qatar and surrounding areas.", location: [25.276987, 51.520008] },
  egypt: { name: "Egypt", flag: "🇪🇬", capital: "Fayoum", presence: "Regional office in Fayoum serving the entire Egypt region.", location: [29.3084, 30.8428] },
  tunisia: { name: "Tunisia", flag: "🇹🇳", capital: "Tunis", presence: "Regional office in Tunis serving the country and nearby areas.", location: [36.8065, 10.1815] },
}

// FitBounds component
const FitBounds = ({ markers }) => {
  const map = useMap()
  const bounds = L.latLngBounds(markers.map((m) => m.location))
  map.fitBounds(bounds, { padding: [50, 50] })
  return null
}

const GCCPresenceMap = () => {
  const allMarkers = Object.values(countries)

  return (
    <div id="our-presence" style={{ padding: "50px 0" }}>
      <MapContainer
        center={[32.4663, 35.3009]} // جنين كنقطة مركزية
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "550px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {allMarkers.map((country, index) => (
          <Marker key={index} icon={pinMB} position={country.location}>
            <Popup>
              <strong>{country.flag} {country.name}</strong>
              <br />
              Capital: {country.capital}
              <br />
              {country.presence}
            </Popup>
          </Marker>
        ))}

        <FitBounds markers={allMarkers} />
      </MapContainer>
    </div>
  )
}

export default GCCPresenceMap
