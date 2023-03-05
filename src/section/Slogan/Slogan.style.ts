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
`;

export const H1 = styled.h1`
  font-style: italic;
  color: ${color.white_gray};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  background-image: linear-gradient(45deg, #16bffd, #cb3066);
  background-clip: text;
  background-position: left;
  color: transparent;
  animation-name: ${animation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  ${theme.breakpoints.up("sm")} {
    font-size: 72px;
  }
`;
