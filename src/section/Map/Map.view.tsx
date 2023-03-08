import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet-providers";
import { TitleSection } from "../../Css/ElementSame";
import * as Style from "./Map.style";
import { Container } from "@mui/system";

interface Props {
  lat: number;
  lng: number;
  text: string;
}

export const MapView: React.FC = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([47.695, 28.9], 13);

    L.tileLayer.provider("CartoDB.Positron").addTo(map); // Aici se schimba stilul hartii cu "BasemapAT.grau"
    L.marker([47.695, 28.9])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }, []);

  return (
    <>
      <Container>
        <TitleSection>Where we are</TitleSection>
      </Container>
      <Style.MapStyle ref={mapRef} />
    </>
  );
};
