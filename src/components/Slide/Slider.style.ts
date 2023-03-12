import styled from "styled-components";
import { Flex, DirectionRow, Center } from "../../Css/ReutilizableCss";
import { theme } from "../../Css/BreakPoints";
import { color } from "../../constants/color";

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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: white;
`;

export const H1 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  ${theme.breakpoints.up("md")} {
    font-size: 72px;
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
  color: white;

  ${theme.breakpoints.up("md")} {
    width: 60%;
    ${Flex({
      gap: "50px",
    })};
  }
`;

export const ImagesContainerText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const iconHref = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  width: 70px;
  border-radius: 100px;
  justify-content: center;
  background-color: rgba(187, 159, 98, 1);
  border: 2px solid rgba(245, 174, 13, 1);
`;

export const AHref = styled.a`
  position: relative;
  padding: 19px 40px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: "34px";
  color: rgb(206, 170, 112);
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 14px;
  border: 2px solid ${color.footer_color};
  border-radius: 100px;

  ${theme.breakpoints.up("sm")} {
    padding: 23px 54px;
  }

  &:hover {
    border: 2px solid rgb(206, 170, 112);
    background-color: white;
    color: ${color.black};
    transition: 0.2s ease-in-out;
    background-color: ${color.white_gray};
  }
`;
