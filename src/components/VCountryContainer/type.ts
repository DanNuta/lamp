import { Props as PropsFlagsCode } from "../VCountryNumber/type";

export interface ItemData {
  flags: string;
  iddRoot: number;
  suffixes?: number;
  nameCountry: string;
}

export interface ItemProps extends ItemData {
  onHandlerItem: (data: PropsFlagsCode) => void;
  state: PropsFlagsCode;
}

export interface Props {
  countryName?: ItemData[];
  onHandler: (data: PropsFlagsCode) => void;
  stateCurent: PropsFlagsCode;
  seachCountry: (data: string) => void;
}
