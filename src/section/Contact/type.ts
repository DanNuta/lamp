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
  email: string | null;
  nume?: string | null;
  telefon: string | null;
  message?: string | null;
  err_email?: string | null;
}
