import * as Style from "./Contact.style";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { PropsView } from "./type";
import { VSocialMedia } from "../../components";
import { TitleSection, Btn, ParagraphSection } from "../../Css/ElementSame";

export const ContactView: React.FC<PropsView> = (props) => {
  return (
    <Style.ContainerStyle id="Contact">
      <TitleSection>Form</TitleSection>

      <Grid container>
        <Grid sm={8} item>
          <ParagraphSection>
            You can ask a question by writing to us in any of the social
            networks, or by filling out the form on the website:
          </ParagraphSection>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          xs={12}
          sm={4}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          alignSelf={"center"}
          item
        >
          <ParagraphSection>dan@gmail.com</ParagraphSection>
          <VSocialMedia />
        </Grid>

        <Grid xs={12} sm={5} item>
          <Style.Form onSubmit={(e) => props.submit(e)} autoComplete="off">
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

            <Style.NumberInputField
              required
              value={props.telefon}
              error={props.error_telefon === "" ? false : true}
              id="outlined-error"
              label="Telephone"
              variant="standard"
              type="number"
              fullWidth
              onChange={(e) => props.telefonFn(e)}
              helperText={props.error_telefon === "" ? "" : props.error_telefon}
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

            <Btn>Contact</Btn>
          </Style.Form>
        </Grid>
      </Grid>
    </Style.ContainerStyle>
  );
};
