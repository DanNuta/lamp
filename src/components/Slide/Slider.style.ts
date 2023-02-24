import styled from "styled-components";
import { Flex, DirectionRow, Center } from "../../Css/ReutilizableCss";
import { theme } from "../../Css/BreakPoints";
interface Images {
  index: number;
  counter: number;
}

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Paraghraph = styled.p`
  ${theme.breakpoints.up("md")} {
    font-size: 20px;
  }
`;

export const H1 = styled.h1`
  ${theme.breakpoints.up("md")} {
    font-size: 56px;
  }
`;

export const Container = styled.div<Images>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: ${(props) => (props.counter === props.index ? 10 : 1)};
  opacity: ${(props) => (props.counter === props.index ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ContainerText = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${Flex({
    alignItems: "center",
    justifyContent: Center.center,
    flexDirection: DirectionRow.colunm,
    gap: "20px",
  })};
  width: 80%;
  margin: auto;
  color: black;

  ${theme.breakpoints.up("md")} {
    width: 40%;
    ${Flex({
      gap: "35px",
    })};
  }
`;

export const ImagesContainerText = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AHref = styled.a`
  outline: none;
  padding: 10px 20px;
  background-color: #212121;
  color: white;
  border-radius: 100px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;
