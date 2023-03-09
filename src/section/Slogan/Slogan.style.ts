// import styled from "styled-components";
import { styled as styleMui } from "@mui/material/styles";
import { Box } from "@mui/system";
import { images } from "../../assets";
import { Flex, Center } from "../../Css/ReutilizableCss";
import { Typography } from "@mui/material";
import { color } from "../../constants/color";
import { theme } from "../../Css/BreakPoints";
import styled, { keyframes } from "styled-components";
import { Container } from "../../components/MobileNavigation/MobileNavigation.style";


export const H1 = styleMui(Typography)`
  font-style: italic;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: ${color.black};

  ${theme.breakpoints.up("sm")} {
    font-size: 60px;
  }
`;
