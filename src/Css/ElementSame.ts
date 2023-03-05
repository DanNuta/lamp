import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { color } from "../constants/color";
import Button from "@mui/material/Button";

export const TitleSection = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "700",
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    fontSize: "30px",
    fontWeight: "800",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "42px",
    fontWeight: "800",
  },
}));

export const Btn = styled(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "16px",
  paddingInline: "40px",
  paddingBlock: "16px",
  backgroundColor: `${color.black}`,
  color: "white",
  border: `1px solid transparent`,

  "&:hover": {
    backgroundColor: "white",
    color: `${color.black}`,
    border: `1px solid ${color.black}`,
  },
}));

export const BtnFilter = styled(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "12px",
  paddingInline: "15px",
  paddingBlock: "13px",
  backgroundColor: `${color.black}`,
  color: "white",
  border: `1px solid transparent`,

  "&:hover": {
    backgroundColor: "white",
    color: `${color.black}`,
    border: `1px solid ${color.black}`,
  },
}));
