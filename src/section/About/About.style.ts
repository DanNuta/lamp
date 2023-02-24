import styled from "styled-components";
import { Flex } from "../../Css/ReutilizableCss";
import { theme } from "../../Css/BreakPoints";

export const Container = styled.div`
  text-align: center;
  ${theme.breakpoints.up("sm")} {
    ${Flex({
      gap: "30px",
    })};
  }
`;

export const ContainerItem = styled.div`
  ${theme.breakpoints.up("sm")} {
    width: 50%;
  }

  position: relative;
`;

export const H1 = styled.h1`
  text-align: center;
  margin: 65px 0 48px 0;
`;

export const Paragraph = styled.p``;

export const Image = styled.img``;

export const Div = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0.07326680672268904) 100%
  );
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
`;

export const ContainerItemDiv = styled.div`
  position: relative;
`;
