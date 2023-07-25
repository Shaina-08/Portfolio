import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const NITHamirpurCoordinates = [31.7214, 76.5232];

const Location = () => {
  return (
    <MapContainer center={NITHamirpurCoordinates} zoom={15} style={{ height: '400px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={NITHamirpurCoordinates}>
        <Popup>NIT Hamirpur</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
