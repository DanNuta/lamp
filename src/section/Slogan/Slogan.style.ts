// import styled from "styled-components";
import { styled as styleMui } from "@mui/material/styles";
import { Box } from "@mui/system";
import { images } from "../../assets";
import { Flex, Center } from "../../Css/ReutilizableCss";
import { Typography } from "@mui/material";
import { color } from "../../constants/color";
import { theme } from "../../Css/BreakPoints";
import styled, { keyframes } from "styled-components";

const animation = keyframes`

0% {  background-position: left};
    100% {  background-position: right};
`;

export const Container = styleMui(Box)`
  width: 100%;
  height: 300px;
  background-image: url(${images.parallax});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: table;

  ${theme.breakpoints.up("sm")}{
    height: 500px;
  }
`;

export const ContainerBg = styleMui(Box)`
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const H1 = styleMui(Typography)`
  font-style: italic;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  color: ${color.white_gray};

  ${theme.breakpoints.up("sm")} {
    font-size: 72px;
  }
`;
