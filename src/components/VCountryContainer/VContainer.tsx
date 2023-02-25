import * as Style from "./VContainer.style";
import { FlagProps } from "../VCountryNumber/type";
import { Typography } from "@mui/material";
import {Props as PropsFlagsCode} from "../VCountryNumber/type";

interface Item {
  flags: string;
  iddRoot: number;
  suffixes?: number;
  nameCountry: string;
}

interface ItemProps extends Item {
  onHandlerItem: (data: PropsFlagsCode) => void;
  state: PropsFlagsCode
}

interface Props {
  countryName?: Item[];
  onHandler: (data: PropsFlagsCode) => void;
  stateCurent: PropsFlagsCode
}

export const Item: React.FC<ItemProps> = (props) => {
  return (
    <Style.ContainerItemFlag onClick={() => props.onHandlerItem({code: props.iddRoot, flags: props.flags})}>
      <Style.ImagesFlags src={`${props.flags}`} />
      <Style.CountryName>{props.nameCountry}</Style.CountryName>
      <Typography>{`(${props.iddRoot})`}</Typography>
    </Style.ContainerItemFlag>
  );
};

export const VContainer: React.FC<Props> = (props) => {
  return (
    <Style.CountryFlag>
      {props.countryName?.map((item) => {
        return <Item 
              state={props.stateCurent}
              onHandlerItem={props.onHandler} 
              {...item} 
              />;
      })}
    </Style.CountryFlag>
  );
};
