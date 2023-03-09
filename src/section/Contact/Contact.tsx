import { ContactView } from "./Contact.view";
import { PropsData, Type, Action, StateProps } from "./type";
import React, { useReducer } from "react";
import { pattern } from "./regEx";
import emailjs from "emailjs-com";
import {text} from "../../TextContent/text";

export const Contact: React.FC = () => {

  const defaultState: StateProps = {
    nume: "",
    email: "",
    telefon: "",
    message: "",

    error_email: "",
    error_telefon: "",

    pending: false,

    validityMessage: ""
  };

  function reducerFn(state: StateProps, action: Action): StateProps {
    const { type, payload } = action;

    switch (type) {
      case Type.NUME:
        return { ...state, nume: payload };
        break;
      case Type.EMAIL:
        return { ...state, error_email: "", email: payload };
        break;
      case Type.TELEFON:
        return { ...state, error_telefon: "", telefon: payload };
        break;
      case Type.MESSAGE:
        return { ...state, message: payload };
        break;

      case Type.ERROR_EMAIL:
        return { ...state, error_email: payload };
        break;
      case Type.ERROR_TELEFON:
        return { ...state, error_telefon: payload };
        break;
      case Type.SEND_DATA:
        return { ...state, pending: true };
        break;
      // case Type.RECEIVE_DATA:
      //   return { ...state, pending: false };
      //   break;
      case Type.VALIDITY:
          return { ...state, pending: false, validityMessage: payload };
          break;
      default:
        return { ...state };
    }
  }

  const [state, dispach] = useReducer(reducerFn, defaultState);

  function numeFn(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = e.target.value;

    dispach({ type: Type.NUME, payload: value });
  }

  function emailFn(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = e.target.value;

    dispach({ type: Type.EMAIL, payload: value });
  }

  function telefonFn(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = e.target.value;

    dispach({ type: Type.TELEFON, payload: value });
  }

  function messageFn(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = e.target.value;
    dispach({ type: Type.MESSAGE, payload: value });
  }

  function submitData(
    e: React.FormEvent<HTMLFormElement>,
    form: React.RefObject<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!pattern.email.test(state.email) && state.telefon === "") {
      dispach({
        type: Type.ERROR_TELEFON,
        payload: "Trebuie sa introduci in numar de telefon",
      });

      dispach({
        type: Type.ERROR_EMAIL,
        payload: "Acest email nu este valid",
      });
    }

    if (!pattern.email.test(state.email)) {
      dispach({
        type: Type.ERROR_EMAIL,
        payload: "Acest email nu este valid",
      });
    } else if (state.telefon === "") {
      dispach({
        type: Type.ERROR_TELEFON,
        payload: "Trebuie sa introduci in numar de telefon",
      });
    } else {
      dispach({ type: Type.EMAIL, payload: "" });
      dispach({ type: Type.MESSAGE, payload: "" });
      dispach({ type: Type.NUME, payload: "" });
      dispach({ type: Type.TELEFON, payload: "" });
      dispach({ type: Type.ERROR_TELEFON, payload: "" });
      dispach({ type: Type.ERROR_EMAIL, payload: "" });

      dispach({ type: Type.SEND_DATA, payload: "" });

      emailjs
        .sendForm(
          "service_slnsoi6",
          "template_8o8dmsa",
          form.current!,
          "user_HhwPsdYuSdseFT3DDVWkC"
        )
        .then(
          function (response) {
            //dispach({ type: Type.RECEIVE_DATA, payload: "" });
            console.log("SUCCESS!", response.status, response.text);

            if (response.status === 200 && response.text == "OK") {
                  dispach({type: Type.VALIDITY, payload: `${text.validity_form}`})
            }

            console.log(response);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  }

  return (
    <ContactView
      numeFn={numeFn}
      emailFn={emailFn}
      telefonFn={telefonFn}
      messageFn={messageFn}
      validityMessage={state.validityMessage}
      pending={state.pending}
      nume={state.nume}
      email={state.email}
      telefon={state.telefon}
      message={state.message}
      error_email={state.error_email}
      error_telefon={state.error_telefon}
      submit={submitData}
    />
  );
};
