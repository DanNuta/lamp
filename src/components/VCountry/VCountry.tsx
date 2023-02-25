import * as Style from "./VCountry.style";
import { Typography } from "@mui/material";
import { Props } from "../VCountryNumber/type";

interface PropsCountry {
  flagCountry: Props;
  onHandler: () => void;
}

export const VCountry: React.FC<PropsCountry> = (props) => {


  return (
    <Style.Container onClick={props.onHandler}>
      <Style.Image src={`${props.flagCountry.flags}`} />
      <Typography>{props.flagCountry.code}</Typography>
    </Style.Container>
  );
};
