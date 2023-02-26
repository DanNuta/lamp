import { PropsData } from "../../section/Contact/type";

export interface Props {
  flags?: string;
  code?: number;
  numeCountry?: string
}

export interface FlagProps {
  countryName?: PropsData[];
  searchCountry: (data: string) => void
}

export interface CounterViewProps extends FlagProps {
  moreCountry: boolean;
  moreCountryFn: () => void;
  stateCountryCode: Props;
  updateInitialFlag: (data: Props) => void
}
