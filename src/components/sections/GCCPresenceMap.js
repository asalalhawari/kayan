import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const pin = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const pinMB = L.icon({
  iconUrl: pin,
  iconSize: [24, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -40],
});

const countries = {
  uae: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    capital: "Dubai",
    presence:
      "Headquarters in Dubai with regional offices in Abu Dhabi and Sharjah.",
    location: [25.276987, 55.296249],
  },
  saudi: {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    capital: "Riyadh",
    presence: "Primary operations in Riyadh with branches in Jeddah and Dammam.",
    location: [24.7136, 46.6753],
  },
  oman: {
    name: "Oman",
    flag: "🇴🇲",
    capital: "Muscat",
    presence: "Regional office in Muscat serving the entire Sultanate.",
    location: [23.588, 58.3829],
  },
  qatar: {
    name: "Qatar",
    flag: "🇶🇦",
    capital: "Doha",
    presence: "Regional office in Doha serving Qatar and surrounding areas.",
    location: [25.276987, 51.520008],
  },
};

const GCCPresenceMap = () => {
  const uaePosition = countries.uae.location;

  return (
    <div id="our-presence" style={{ padding: "50px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Presence</h2>
      <MapContainer
        center={uaePosition}
        zoom={6}
        scrollWheelZoom={true}
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {Object.values(countries).map((country, index) => (
          <Marker key={index} icon={pinMB} position={country.location}>
            <Popup>
              <strong>
                {country.flag} {country.name}
              </strong>
              <br />
              Capital: {country.capital}
              <br />
              {country.presence}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GCCPresenceMap;
