import styled from "styled-components";
import { DirectionRow, Flex } from "../../Css/ReutilizableCss";
import Button from "@mui/material/Button";
import { styled as styleMui } from "@mui/material/styles";

export const Form = styled.form`
 ${Flex({
    flexDirection: DirectionRow.colunm,
    gap: "20px"
})}
`;

export const H1 = styled.h1``;

export const ButtonForm = styleMui(Button)`

border-radius: 100px;

`;
