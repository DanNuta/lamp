import styled from "styled-components";
import { Flex, Center, DirectionRow } from "../../Css/ReutilizableCss";
import { theme } from "../../Css/BreakPoints";
import { Transform } from "@mui/icons-material";

interface Props {
  state: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  padding: 34px 24px 0 32px;
  top: 0;
  border: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  z-index: 100;
  opacity: ${(props) => (props.state ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;

  ${theme.breakpoints.up("sm")} {
    display: none;
  }
`;

export const Ul = styled.ul`
  ${Flex({
    gap: "35px",
    flexDirection: DirectionRow.colunm,
  })}
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

export const Li = styled.li``;

export const ContainerLogoForMobile = styled.div`
  ${Flex({ alignItems: "center", justifyContent: Center.flexBetween })};
  margin-bottom: 65px;
`;

export const AHref = styled.a``;
