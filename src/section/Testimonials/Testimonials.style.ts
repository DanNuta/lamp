import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { styled as styleMui } from "@mui/material/styles";
import styled from "styled-components";
import { theme } from "../../Css/BreakPoints";
import {color} from "../../constants/color";

export const H1 = styleMui(Typography)``;

export const ContainerParent = styled(motion.div)`
  overflow: hidden;
  background-color: ${color.white_gray};
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 1px;
  margin-top: 30px;

  ${theme.breakpoints.up("sm")}{
    margin-top: 100px
  }
`;

export const ContainerChid = styled(motion.div)`
  display: flex;
  gap: 20px;
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
