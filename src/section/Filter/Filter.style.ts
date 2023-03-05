import styled from "styled-components";
import { Flex, Center } from "../../Css/ReutilizableCss";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { styled as styleMui } from "@mui/material/styles";
import { Container } from "@mui/system";
import { theme } from "../../Css/BreakPoints";

export const ContainerStyle = styleMui(Container)(({ theme }) => ({
  marginBlock: "80px 80px",

  [theme.breakpoints.up("sm")]: {
    marginBlock: "130px 130px",
  },
}));

export const ContainerParent = styled.div`
  margin-top: 30px;

  ${theme.breakpoints.up("sm")} {
    margin-top: 50px;
  }
`;
