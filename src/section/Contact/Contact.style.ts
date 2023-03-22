import styled from "styled-components";
import { DirectionRow, Flex } from "../../Css/ReutilizableCss";
import Button from "@mui/material/Button";
import { styled as styleMui } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import { color } from "../../constants/color";

export const GridItemIcon = styleMui(Grid)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
  },
}));

export const TextFieldStyle = styleMui(TextField)(() => ({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",

  "&::placeholder": {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
  },
}));

export const ContainerStyle = styleMui(Container)(({ theme }) => ({
  marginBlock: "80px 80px",

  [theme.breakpoints.up("sm")]: {
    marginBlock: "130px 130px",
  },
}));

export const Form = styled.form`
  ${Flex({
    flexDirection: DirectionRow.colunm,
    gap: "20px",
  })}
`;

export const H1 = styled.h1``;

export const ButtonForm = styleMui(Button)`
border-radius: 100px;
`;

export const ContactContainerStyle = styleMui(Box)`
display: flex;
alignItems: center;
`;

export const NumberInputField = styleMui(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
}));

export const FormMessage = styleMui(Grid)(({ theme }) => ({
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

export const TitleMessageForm = styleMui(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  color: `${color.black}`,

  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));
