import * as Style from "./Contact.style";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { PropsData, PropsView } from "./type";
import { VCountryNumber } from "../../components";
import { pattern } from "./regEx";

export const ContactView: React.FC<PropsView> = (props) => {
  return (
    <Container id="contact">
      <Style.H1>Form</Style.H1>

      <Style.Form  autoComplete="off">
        <TextField
          value={props.nume}
          id="standard-basic"
          label="Nume"
          variant="standard"
          type="text"
          onChange={(e) => props.numeFn(e)}
        />

        <TextField
          value={props.email}
          required
          helperText={props.error_email}
          error={props.error_email === "" ? false : true}
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
          valueNumber={props.telefon}
          error_telefon={props.error_telefon}
        />

        <TextField
          id="standard-basic"
          label="Mesaj"
          variant="standard"
          type="text"
          multiline
          onChange={(e) => props.messageFn(e)}
          maxRows={4}
          value={props.message}
        />

        <Style.ButtonForm onClick={props.submit} variant="contained">
          Click
        </Style.ButtonForm>
      </Style.Form>
    </Container>
  );
};
