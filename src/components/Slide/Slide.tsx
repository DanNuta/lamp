import { SliderType } from "./type";
import * as Style from "./Slider.style";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

export const Slider: React.FC<SliderType> = (props) => {
  const [counter, setCounter] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev === props.lenght - 1) {
          return (prev = 0);
        } else {
          return (prev = prev + 1);
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Style.Container counter={counter} index={props.index}>
      <Style.Image src={props.image} />
      <Style.ImagesContainerText>
        <Style.ContainerText>
          <Style.H1>{props.title}</Style.H1>
          <Style.Paraghraph>{props.description}</Style.Paraghraph>
          <Style.AHref href="#">Learn more</Style.AHref>
        </Style.ContainerText>
      </Style.ImagesContainerText>
    </Style.Container>
  );
};
