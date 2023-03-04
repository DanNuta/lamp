import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet-providers";

interface Props {
  lat: number;
  lng: number;
  text: string;
}

export const MapView: React.FC = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([47.695, 28.9], 13);

    // Adaugă o imagine de fundal pentru hartă
    L.tileLayer.provider("CartoDB.Positron").addTo(map); // Aici se schimba stilul hartii cu "BasemapAT.grau"
    L.marker([47.695, 28.9])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }, []);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};
