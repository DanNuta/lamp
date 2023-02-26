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
}

export interface PropsView extends StateProps {
  country?: PropsData[];
  searchCountry: (data: string) => void;
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
  submit: () => void;
}

export enum Type {
  EMAIL = "EMAIL",
  NUME = "NUME",
  MESSAGE = "MESSAGE",
  TELEFON = "TELEFON",

  ERROR_EMAIL = "ERROR_EMAIL",
  ERROR_TELEFON = "ERROR_TELEFON",
}

export interface Action {
  type: Type;
  payload: string;
}
