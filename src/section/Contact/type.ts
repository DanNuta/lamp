export interface PropsData {
  flags: string;
  iddRoot: number;
  suffixes?: number;
  nameCountry: string;
}

export interface PropsView {
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
  email?: string | null;
  nume?: string | null;
  telefon?: string | null;
  message?: string | null;
  err_email?: string | null;
}




export enum Type {
  EMAIL = "EMAIL",
  NUME = "NUME",
  MESSAGE = "MESSAGE",
  TELEFON = "TELEFON",

  ERROR_EMAIL = "ERROR_EMAIL",
  ERROR_NUME = "ERROR_NUME",
  ERROR_MESSAGE = "ERROR_MESSAGE",
  ERROR_TELEFON = "ERROR_TELEFON",
}



export interface Action {
  type: Type;
  payload: string;
}

export interface StateProps {
  nume?: string | null;
  email?: string | null;
  telefon?: string | null;
  message?: string | null;

  error_email: string | null;
  error_telefon: string | null;
}