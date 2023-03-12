import * as Style from "./Contact.style";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { PropsView } from "./type";
import { VSocialMedia } from "../../components";
import { TitleSection, Btn, ParagraphSection } from "../../Css/ElementSame";
import { useEffect, useRef } from "react";
import Alert from "@mui/material/Alert";
import { text, footerContentText } from "../../TextContent/text";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

interface ContactProps {
  title: string;
  desc: string;
  form: {
    name: string;
    email: string;
    tel: string;
    message: string;
    err_email: string;
    err_tel: string;
  };
  btn: string[];
  validity: string;
  section: string;
}

export const ContactView: React.FC<PropsView> = (props) => {
  const { translator } = useContext(TranslatorContext) as Props;

  const transText = translator.form;

  const translatorText: ContactProps = {
    title: transText.title,
    desc: transText.desc,
    form: {
      name: transText.form.name,
      email: transText.form.email,
      tel: transText.form.tel,
      message: transText.form.message,
      err_email: transText.form.err_email,
      err_tel: transText.form.err_tel,
    },
    btn: transText.btn,
    validity: transText.validity,
    section: translator.sections.contact,
  };

  const form = useRef<HTMLFormElement>(null);

  return (
    <Style.ContainerStyle id={`${translatorText.section}`}>
      <TitleSection>{translatorText.title}</TitleSection>

      <Grid container>
        <Style.FormMessage style={{ marginBlock: "50px" }} xs={12} sm={8} item>
          <Style.TitleMessageForm>{translatorText.desc}</Style.TitleMessageForm>
        </Style.FormMessage>
      </Grid>

      <Grid container>
        <Style.GridItemIcon xs={12} sm={6} md={6} item>
          <ParagraphSection>{footerContentText.email}</ParagraphSection>
          <VSocialMedia />
        </Style.GridItemIcon>

        <Grid xs={12} sm={6} md={6} item>
          <Style.Form
            ref={form}
            onSubmit={(e) => props.submit(e, form)}
            autoComplete="off"
          >
            <Style.TextFieldStyle
              value={props.nume}
              name="nume"
              id="standard-basic"
              label={`${translatorText.form.name}`}
              variant="standard"
              type="text"
              onChange={(e) => props.numeFn(e)}
            />

            <TextField
              value={props.email}
              name="email"
              required
              helperText={props.error_email}
              error={props.error_email === "" ? false : true}
              id="standard-basic"
              label={`${translatorText.form.email}`}
              variant="standard"
              type="text"
              onChange={(e) => props.emailFn(e)}
            />

            <Style.NumberInputField
              required
              name="telefon"
              value={props.telefon}
              error={props.error_telefon === "" ? false : true}
              id="outlined-error"
              label={`${translatorText.form.tel}`}
              variant="standard"
              type="number"
              fullWidth
              onChange={(e) => props.telefonFn(e)}
              helperText={props.error_telefon === "" ? "" : props.error_telefon}
            />

            <TextField
              id="standard-basic"
              name="message"
              label={`${translatorText.form.message}`}
              variant="standard"
              type="text"
              multiline
              onChange={(e) => props.messageFn(e)}
              maxRows={4}
              value={props.message}
            />

            <Btn type="submit">
              {props.pending
                ? `${translatorText.btn[1]}`
                : `${translatorText.btn[0]}`}
            </Btn>
            {props.validityMessage && (
              <Alert variant="outlined" severity="success">
                {translatorText.validity}
              </Alert>
            )}
          </Style.Form>
        </Grid>
      </Grid>
    </Style.ContainerStyle>
  );
};
