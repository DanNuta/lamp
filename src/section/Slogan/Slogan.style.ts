import styled from "styled-components";
import { images } from "../../assets";
import { Flex, Center } from "../../Css/ReutilizableCss";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${images.parallax});
  background-image: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  ${Flex({ alignItems: "center", justifyContent: Center.center })}
`;

export const H1 = styled.h1``;
