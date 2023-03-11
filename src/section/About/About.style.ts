import styled from "styled-components";
import { Flex } from "../../Css/ReutilizableCss";
import { theme } from "../../Css/BreakPoints";
import { styled as styleMui } from "@mui/material/styles";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { styled as styleddMui } from "@mui/material/styles";
import { color } from "../../constants/color";

interface Props {
  margin: boolean;
}

export const ContainerStyle = styleMui(Container)(({ theme }) => ({
  marginBlock: "80px 80px",

  [theme.breakpoints.up("sm")]: {
    marginBlock: "130px 50px",
  },
}));

export const ContainerElement = styled.div`
  text-align: center;
  margin-top: 30px;
  ${theme.breakpoints.up("sm")} {
    ${Flex({
      gap: "30px",
    })};

    margin-top: 50px;
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

export const Image = styled.img`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Div = styled.div`
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
  position: absolute;
  width: 100%;
  height: 250px;
  bottom: 0;
`;

export const ContainerItemDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Btn = styleddMui(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  paddingInline: "40px",
  paddingBlock: "16px",
  backgroundColor: `${color.black}`,
  color: "white",
  border: `1px solid transparent`,
  borderRadius: "0px",

  "&:hover": {
    backgroundColor: "white",
    color: `${color.black}`,
    border: `1px solid ${color.black}`,
  },
}));

export const CenterBtn = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.margin ? "0" : "50px")};
`;
