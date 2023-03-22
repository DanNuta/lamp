import styled from "styled-components";
import { styled as styleMui } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { color } from "../../constants/color";
import { theme } from "../../Css/BreakPoints";


export const ContainerParent = styled.div`
padding-top: 50px;
background-color: ${color.colorHoverBtn};
color: white;

${theme.breakpoints.up("md")} {
    padding-top: 80px
  }

`


export const ContainerGrid = styleMui(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  color: 'white',

  [theme.breakpoints.up("md")]: {
    gap: "0",
    flexDirection: "row",
  },
}));

export const ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: white;

  ${theme.breakpoints.up("md")} {
    align-items: flex-start;
  }
`;

export const li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${color.black};
  justify-content: center;
  color: 'white',

  ${theme.breakpoints.up("md")} {
    justify-content: start;
  }
`;

export const TextContact = styleMui(Typography)(({}) => ({
  color: 'white',
}));

export const LogoGrid = styleMui(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",

  [theme.breakpoints.up("md")]: {
    alignItems: "start",
    justifyContent: "center",
  },
}));

export const AHref = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

export const linkUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
`;

export const linkLi = styled.li`
  text-align: center;
  color: 'white';

  ${theme.breakpoints.up("md")} {
    text-align: left;
  }
`;

export const TitleSectionFooter = styleMui(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
 // color: `${color.black}`,
  marginBottom: "21px",
  color: 'white',

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
}));

export const LinksGrid = styleMui(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: 'white',

  [theme.breakpoints.up("md")]: {
    alignItems: "start",
  },
}));

export const ContactLink = styleMui(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: 'white',

  [theme.breakpoints.up("md")]: {
    alignItems: "start",
  },
}));

export const SocialMediaGrid = styleMui(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    alignItems: "start",
  },
}));

export const FooterElement = styled.div`
  background-color: black;
`;

export const FooterParaghraph = styleMui(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  padding: "24px 47px",
  marginTop: "40px",
  color: "white",

  [theme.breakpoints.up("sm")]: {
    padding: "20px 0",
    fontSize: "16px",
    marginTop: "100px",
  },
}));
