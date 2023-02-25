import { PropsData } from "../../section/Contact/type";

export interface Props {
  flags?: string;
  code?: number;
}

export interface FlagProps {
  countryName?: PropsData[];
}

export interface CounterViewProps extends FlagProps {
  moreCountry: boolean;
  moreCountryFn: () => void;
  stateCountryCode: Props;
  updateInitialFlag: (data: Props) => void
}
