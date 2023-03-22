import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import { styled as styleMui } from "@mui/material/styles";
import { color } from "../../constants/color";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";

interface Props {
  index: number;
  i: number;
}

export const ImageSliderItem = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`;

export const CardItem = styleMui(CardMedia)`

`;

export const ImagesContainer = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.index === props.i ? 2 : 1)};
  overflow: hidden;
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
  //border: 1px solid transparent;
  background-color: ${color.black};
  border-radius: 3px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${color.btnHover};
    color: ${color.colorHoverBtn};
    transition: 0.2s ease-in-out;
  }
`;

export const TypographyTitle = styleMui(Typography)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
`;

export const TypographyPrice = styleMui(Typography)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: ${color.black};
`;

export const ParentCard = styleMui(Card)`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
