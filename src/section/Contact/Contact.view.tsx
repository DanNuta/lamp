import * as Style from "./Contact.style";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { PropsData, PropsView } from "./type";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { VCountryNumber } from "../../components";

export const ContactView: React.FC<PropsView> = (props) => {
  return (
    <Container>
      <Style.H1>Form</Style.H1>

      <Style.Form>
        <TextField
          id="standard-basic"
          label="Nume"
          variant="standard"
          type="text"
          onChange={(e) => props.numeFn(e)}
        />

        <TextField
          required
          id="standard-basic"
          label="Email"
          variant="standard"
          type="text"
          onChange={(e) => props.emailFn(e)}
        />

        <VCountryNumber
          countryName={props.country}
          searchCountry={props.searchCountry}
          onHandlerNumberInput={props.telefonFn}
        />

        <TextField
          id="standard-basic"
          label="Mesaj"
          variant="standard"
          type="text"
          multiline
          onChange={(e) => props.messageFn(e)}
          maxRows={4}
        />
      </Style.Form>
    </Container>
  );
};
