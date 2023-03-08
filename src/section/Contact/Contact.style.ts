import styled from "styled-components";
import { DirectionRow, Flex } from "../../Css/ReutilizableCss";
import Button from "@mui/material/Button";
import { styled as styleMui } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";

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
