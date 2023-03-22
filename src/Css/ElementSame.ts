import { Typography } from "@mui/material";
import { styled as styleddMui } from "@mui/material/styles";
import { color } from "../constants/color";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { theme } from "./BreakPoints";

interface Props {
  padding: string;
  fontSize?: string;
  textTransform?: string;
}

export const TitleSection = styleddMui(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "700",
  textAlign: "left",

  [theme.breakpoints.up("sm")]: {
    fontSize: "30px",
    fontWeight: "800",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "42px",
    fontWeight: "800",
  },
}));

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
    backgroundColor: `${color.btnHover}`,
    color: `${color.colorHoverBtn}`,
    //border: `1px solid ${color.black}`,
  },
}));

export const BtnFilter = styleddMui(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "12px",
  paddingInline: "15px",
  paddingBlock: "13px",
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

export const Paraghraph = styleddMui(Typography)`
  color: ${color.black};
  text-align: left;
`;

export const AHref = styled.a<Props>`
  padding: ${(props) => props.padding};
  font-family: "Montserrat";
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  color: white;
  border: 1px solid transparent;
  background-color: ${color.black};
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 14px;

  ${theme.breakpoints.up("sm")} {
  }

  &:hover {
    //border: 1px solid ${color};
    background-color: ${color.btnHover};
    color: ${color.colorHoverBtn};
    transition: 0.2s ease-in-out;
    // background-color: ${color.white_gray};
  }
`;

export const ParagraphSection = styleddMui(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: `${color.black}`,

  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
  },
}));
