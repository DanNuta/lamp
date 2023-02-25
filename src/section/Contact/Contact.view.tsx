import * as Style from "./Contact.style";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { PropsData } from "./type";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { VCountryNumber } from "../../components";

interface PropsView {
  country?: PropsData[];
}

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
        />

        <TextField
          required
          id="standard-basic"
          label="Email"
          variant="standard"
          type="text"
        />

        <VCountryNumber countryName={props.country} />

        <TextField
          id="standard-basic"
          label="Mesaj"
          variant="standard"
          type="text"
          multiline
          maxRows={4}
        />
      </Style.Form>
    </Container>
  );
};
