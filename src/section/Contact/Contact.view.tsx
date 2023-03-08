import * as Style from "./Contact.style";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { PropsView } from "./type";
import { VCountryNumber, VSocialMedia } from "../../components";
import { TitleSection, Btn, ParagraphSection } from "../../Css/ElementSame";



export const ContactView: React.FC<PropsView> = (props) => {
  return (
    <Style.ContainerStyle id="Contact">
      <TitleSection>Form</TitleSection>

      <Grid container>

        <Grid  item>
      <ParagraphSection>You can ask a question by writing to us in any of the social networks,
        or by filling out the form on the website:</ParagraphSection>



        </Grid>
        <Grid sm={4} item>
          <ParagraphSection>dan@gmail.com</ParagraphSection>

          <VSocialMedia/>
        </Grid>


        <Grid sm={8} item>
        <Style.Form autoComplete="off">
        <Style.TextFieldStyle
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

        <Btn onClick={props.submit}>Contact</Btn>
      </Style.Form>
        </Grid>
      </Grid>

  

     
    </Style.ContainerStyle>
  );
};
