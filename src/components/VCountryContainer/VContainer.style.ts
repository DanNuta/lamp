import styled from "styled-components";
import { Flex, Center, DirectionRow } from "../../Css/ReutilizableCss";
import { styled as styleMui } from "@mui/material/styles";
import { Typography } from "@mui/material";

interface Props {
  itemState?: string;
  itemCurent?: string;
}

export const CountryFlag = styled.div`
  height: 250px;
  width: 300px;
  background-color: white;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.31);
  padding: 8px;
`;

export const ContainerItemFlag = styled.div<Props>`
  ${Flex({ alignItems: "center" })};
  height: 25px;
  cursor: pointer;
  padding-inline: 9px;
  color: ${(props) =>
    props.itemCurent === props.itemState ? "blue" : "black"};
`;

export const ImagesFlags = styled.img`
  height: 100%;
  width: 40px;
  border-radius: 3px;
  margin-right: 25px;
`;

export const CountryName = styleMui(Typography)``;

export const ContainerEachCountry = styled.div`
  ${Flex({ gap: "25px", flexDirection: DirectionRow.colunm })}
  height: 75%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
