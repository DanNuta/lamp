import * as Style from "./VCountryNumber.style";
import { VCountry } from "../VCountry/VCountry";
import TextField from "@mui/material/TextField";
import { CounterViewProps } from "./type";
import { VContainer } from "../VCountryContainer/VContainer";

export const VCountryNumberView: React.FC<CounterViewProps> = (props) => {
  return (
    <Style.Container>
      <Style.FlagNumber>
        <VCountry
          flagCountry={props.stateCountryCode}
          onHandler={props.moreCountryFn}
        />

        <TextField
          error={false}
          id="outlined-error"
          label="Telephone"
          variant="standard"
          type="number"
        />
      </Style.FlagNumber>
      {props.moreCountry && (
        <VContainer
          onHandler={props.updateInitialFlag}
          countryName={props.countryName}
          stateCurent={props.stateCountryCode}
        />
      )}
    </Style.Container>
  );
};
