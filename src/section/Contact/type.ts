import React from "react";
export interface PropsData {
  flags: string;
  iddRoot: number;
  suffixes?: number;
  nameCountry: string;
}

export interface StateProps {
  nume?: string;
  email: string;
  telefon: string;
  message?: string;

  error_email: string;
  error_telefon: string;

  pending: boolean
}

export interface PropsView extends StateProps {
  numeFn: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  emailFn: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  telefonFn: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  messageFn: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submit: (e: React.FormEvent<HTMLFormElement>, form: React.RefObject<HTMLFormElement>) => void;
}

export enum Type {
  EMAIL = "EMAIL",
  NUME = "NUME",
  MESSAGE = "MESSAGE",
  TELEFON = "TELEFON",

  ERROR_EMAIL = "ERROR_EMAIL",
  ERROR_TELEFON = "ERROR_TELEFON",

  SEND_DATA = "SEND_DATA",
  RECEIVE_DATA = "RECEIVE_DATA"

}

export interface Action {
  type: Type;
  payload: string;
}
