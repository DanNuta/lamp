import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { styled as styleMui } from "@mui/material/styles";
import styled from "styled-components";

export const H1 = styleMui(Typography)``;

export const ContainerParent = styled(motion.div)`
  overflow: hidden;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 1px;
`;

export const ContainerChid = styled(motion.div)`
  display: flex;
  gap: 20px;
`;
