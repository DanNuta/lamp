import styled from "styled-components";
import { Center, Flex } from "../../Css/ReutilizableCss";
import IconButton from "@mui/material/IconButton";
import { styled as styleMui } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";

export const ContainerDiv = styled.div`
  ${Flex({ justifyContent: Center.center })}
`;

export const ContainerImages = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 200;
  ${Flex({
    alignItems: "center",
    justifyContent: Center.center,
    gap: "10px",
  })}
`;

export const ImageElementClick = styled.div``;

export const Image = styled.img`
  object-fit: cover;
  cursor: pointer;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  ${Flex({ alignItems: "center", justifyContent: Center.center })};
  padding: 10px;
  cursor: pointer;
`;

export const NextItem = styleMui(IconButton)`
background-color: white;


&:hover{
    color: white
}

`;

export const ButtonStyle = styleMui(Button)`
display: flex;
justify-content: center;
align-items: center;
`;
