import styled from "styled-components";
import { Flex, Center } from "../../Css/ReutilizableCss";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { styled as styleMui } from "@mui/material/styles";
import { Container } from "@mui/system";
import { theme } from "../../Css/BreakPoints";
import {color} from "../../constants/color";

export const ContainerStyle = styleMui(Container)(({ theme }) => ({
  //marginBlock: "80px 80px",

  [theme.breakpoints.up("sm")]: {
   // marginBlock: "130px 130px",
  },
}));

export const ContainerParent = styled.div`
   margin-top: 30px; 

  ${theme.breakpoints.up("sm")} {
    margin-top: 50px;
  }
`;


export const ContanerTop = styled.div`
background-color: ${color.white_gray};
padding-block: 58px;
margin-bottom: 80px;

${theme.breakpoints.up("sm")} {
  padding-block: 100px;
  margin-bottom: 130px;
  }
`;
