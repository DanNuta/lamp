import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import { styled as styleMui } from "@mui/material/styles";
import { color } from "../../constants/color";

interface Props {
  index: number;
  i: number;
}

export const ImageSliderItem = styled.div`
  position: relative;
  height: 150px;
`;

export const CardItem = styleMui(CardMedia)`

`;

export const ImagesContainer = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.index === props.i ? 2 : 1)};
  overflow: hidden;

  img {
    transition: 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

export const BackroundElement = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const AHref = styled.a`
  padding: 13px 15px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  color: white;
  border: 1px solid transparent;
  background-color: ${color.black};
  border-radius: 3px;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${color.black};
    background-color: white;
    color: ${color.black};
    transition: 0.2s ease-in-out;
  }
`;
