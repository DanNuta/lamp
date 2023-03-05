import * as Style from "./Slogan.style";
import { icons } from "../../assets";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import {color} from "../../constants/color";

export const SloganView: React.FC = () => {
  return (
    <Style.Container>
      <Style.ContainerBg>
        <FormatQuoteOutlinedIcon style={{ color:`${color.white_gray}`,  fontSize: 100 }} />

        <Style.H1>Lifting people’s quality of life with light</Style.H1>
      </Style.ContainerBg>
    </Style.Container>
  );
};
