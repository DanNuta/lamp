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
          required
          value={props.valueNumber}
          error={props.error_telefon === "" ? false : true}
          id="outlined-error"
          label="Telephone"
          variant="standard"
          type="number"
          fullWidth
          onChange={(e) => props.onHandlerNumberInput(e)}
          helperText={props.error_telefon === "" ? "" : props.error_telefon}
        />
      </Style.FlagNumber>

      {props.moreCountry && (
        <VContainer
          onHandler={props.updateInitialFlag}
          countryName={props.countryName}
          stateCurent={props.stateCountryCode}
          seachCountry={props.searchCountry}
        />
      )}
    </Style.Container>
  );
};
