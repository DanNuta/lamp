import { Typography } from "@mui/material";
import { styled as styleMui } from "@mui/material/styles";
import styled from "styled-components";
import { theme } from "../../Css/BreakPoints";

export const Container = styled.div`
  padding-inline: 35px;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 99%;
  flex: 0 0 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ${theme.breakpoints.up("md")} {
    max-width: 49%;
  }
`;

export const H1 = styleMui(Typography)`

margin-top: 27px;
font-style:italic;
`;
