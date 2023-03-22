import { socialMedia } from "../../assets";
import * as Style from "./VSocialMedia.style";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

interface PropsColor {
  color: string;
}

export const VSocialMedia: React.FC<PropsColor> = (props) => {
  return (
    <Style.Container>
      {/* <Style.AHref target="_blank" href="">
        {socialMedia.instagram}
      </Style.AHref> */}
      <Style.AHref target="_blank" href="">
        <TelegramIcon style={{ color: `${props.color}` }} />
      </Style.AHref>
      <Style.AHref target="_blank" href="">
        <FacebookIcon style={{ color: `${props.color}` }} />
      </Style.AHref>
      <Style.AHref target="_blank" href="">
        <InstagramIcon style={{ color: `${props.color}` }} />
      </Style.AHref>
    </Style.Container>
  );
};
