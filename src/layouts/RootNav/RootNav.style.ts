import styled from "styled-components";
import { Flex, Center } from "../../Css/ReutilizableCss";
import { theme } from "../../Css/BreakPoints";
import { Link } from "react-router-dom";

interface Props {
  state: boolean;
}

export const Container = styled.div``;
export const Header = styled.header`
  ${Flex({ alignItems: "center", justifyContent: Center.flexBetween })}
  height: 80px;
  background-color: white;
`;

export const Navigation = styled.nav``;

export const LogoContainer = styled.div`
  width: 100px;
  height: 100%;
`;

export const Ul = styled.ul`
  display: none;

  ${theme.breakpoints.up("sm")} {
    ${Flex({ gap: "15px" })}
  }

  ${theme.breakpoints.up("md")} {
    ${Flex({ gap: "60px" })}
  }
`;

export const AHref = styled.a`
color: black;
`;

export const Li = styled.li`
  position: relative;
  height: 100%;
  padding: 0 10px;

  &::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 3px;
    background-color: red;
    bottom: -28px;
    left: 0;
    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ContainerLogoForMobile = styled.div`
  ${Flex({ alignItems: "center", justifyContent: Center.flexBetween })};
  background-color: red;
`;

export const BarsNav = styled.div`
  ${theme.breakpoints.up("sm")} {
    display: none;
  }
`;

export const MobileContainer = styled.div<Props>``;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
