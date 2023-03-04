import * as Style from "./Slogan.style";
import { icons } from "../../assets";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

export const SloganView: React.FC = () => {
  return (
    <Style.Container>

      <Style.ContainerBg>

       <FormatQuoteOutlinedIcon style={{ fontSize: 100 }} />

      <Style.H1 variant="h1">Lorem imsum dolor </Style.H1>
      </Style.ContainerBg>
    </Style.Container>
  );
};
