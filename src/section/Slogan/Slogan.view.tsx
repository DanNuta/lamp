import * as Style from "./Slogan.style";
import { icons } from "../../assets";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { color } from "../../constants/color";
import { Container } from "@mui/material";

export const SloganView: React.FC = () => {
  return (
    <Container style={{display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"}}>
      
        <FormatQuoteOutlinedIcon
          style={{ color: `${color.black}`, fontSize: 70 }}
        />

        <Style.H1>Lifting people’s quality of life with light</Style.H1>
      
    </Container>
  );
};
