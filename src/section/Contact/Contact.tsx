import { ContactView } from "./Contact.view";
import { useFetchCountry } from "../../hooks/useFetchCountry";
import { PropsData } from "./type";
import React, { useReducer } from "react";
import { pattern } from "./regEx";

export const Contact: React.FC = () => {
  const { country } = useFetchCountry("https://restcountries.com/v3.1/all");

  const [countryState, setCountryState] = React.useState<PropsData[]>(country);

  React.useEffect(() => {
    setCountryState((prev) => {
      return (prev = country);
    });
  }, [country]);

  enum Type {
    EMAIL = "EMAIL",
    NUME = "NUME",
    MESSAGE = "MESSAGE",
    TELEFON = "TELEFON",

    ERROR_EMAIL = "ERROR_EMAIL",
    ERROR_NUME = "ERROR_NUME",
    ERROR_MESSAGE = "ERROR_MESSAGE",
    ERROR_TELEFON = "ERROR_TELEFON",
  }

  interface Action {
    type: Type;
    payload: string;
  }

  interface StateProps {
    nume?: string | null;
    email: string | null;
    telefon: string | null;
    message?: string | null;

    error_email: string | null;
    error_telefon: string | null;
  }

  const defaultState: StateProps = {
    nume: null,
    email: null,
    telefon: null,
    message: null,

    error_email: null,
    error_telefon: null,
  };

  function reducerFn(state: StateProps, action: Action): StateProps {
    const { type, payload } = action;

    switch (type) {
      case Type.NUME:
        return { ...state, nume: payload };
        break;
      case Type.EMAIL:
        return { ...state, error_email: null, email: payload };
        break;
      case Type.TELEFON:
        return { ...state, telefon: payload };
        break;
      case Type.MESSAGE:
        return { ...state, message: payload };
        break;

      case Type.ERROR_EMAIL:
        return { ...state, error_email: payload };
        break;

      default:
        return { ...state };
    }
  }

  const [state, dispach] = useReducer(reducerFn, defaultState);

  function searchCountry(value: string) {
    const localCountry = localStorage.getItem("country");

    if (localCountry) {
      const data: PropsData[] = JSON.parse(localCountry);
      const newArray = data.filter((item) =>
        item.nameCountry.toLowerCase().includes(value.toLowerCase())
      );

      if (value === "" || newArray.length === 0) {
        setCountryState((prev) => {
          return (prev = data);
        });
      } else {
        setCountryState((prev) => {
          return (prev = newArray);
        });
      }
    }
  }

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

    if (!pattern.email.test(value)) {
      dispach({ type: Type.ERROR_EMAIL, payload: "Acesta nu este un email" });
    } else {
      dispach({ type: Type.EMAIL, payload: value });
    }
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

  function submitData() {
    console.log("click");
  }

  return (
    <ContactView
      country={countryState}
      searchCountry={searchCountry}
      numeFn={numeFn}
      emailFn={emailFn}
      telefonFn={telefonFn}
      messageFn={messageFn}
      nume={state.nume}
      email={state.email}
      telefon={state.telefon}
      message={state.message}
      err_email={state.error_email}
      submit={submitData}
    />
  );
};
