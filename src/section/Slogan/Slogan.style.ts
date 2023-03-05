// import styled from "styled-components";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { images } from "../../assets";
import { Flex, Center } from "../../Css/ReutilizableCss";
import { Typography } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${images.parallax});
  background-image: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: table;
`;

export const ContainerBg = styled(Box)`
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  text-align: center;
`;

export const H1 = styled(Typography)`
  font-style: italic;
`;
