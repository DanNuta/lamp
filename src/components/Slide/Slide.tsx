import { SliderType } from "./type";
import * as Style from "./Slider.style";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { AHref } from "../../Css/ElementSame";

export const Slider: React.FC<SliderType> = (props) => {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <Style.Container counter={counter} index={props.index}>
      <Style.Image src={props.image} />
      <Style.ImagesContainerText>
        <Style.ContainerText>
          <Style.H1>{props.title}</Style.H1>
          <Style.AHref href="#Catalog">Go to the catalog</Style.AHref>
        </Style.ContainerText>
      </Style.ImagesContainerText>
    </Style.Container>
  );
};
