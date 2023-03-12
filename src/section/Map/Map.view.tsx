import React, { useRef, useEffect, useContext } from "react";
import L from "leaflet";
import "leaflet-providers";
import { TitleSection } from "../../Css/ElementSame";
import * as Style from "./Map.style";
import { Container } from "@mui/system";

import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

export const MapView: React.FC = () => {
  const { translator } = useContext(TranslatorContext) as Props;

  const mapTitle: string = translator.map.title;

  const mapRef = useRef<any>(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([47.695, 28.9], 13);

    L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(map); // Aici se schimba stilul hartii cu "BasemapAT.grau"
    L.marker([47.695, 28.9])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }, []);

  return (
    <>
      <Container>
        <TitleSection>{mapTitle}</TitleSection>
      </Container>
      <Style.MapStyle ref={mapRef} />
    </>
  );
};
