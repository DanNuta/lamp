import { PropaneSharp } from "@mui/icons-material";
import React, { createContext, useState, PropsWithChildren } from "react";
import data from "../Translator/translator.json";
import { Props } from "./type";

export const TranslatorContext = createContext<Props | null>(null);

export const TranslatorContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [translator, setTranslator] = useState(data.english);

  function changeLeanguege(v: string) {
    console.log(v);

    setTranslator((prev) => {
      if (v === "en") {
        return data.english;
      }
      return data.Deutsche;
    });
  }

  return (
    <TranslatorContext.Provider value={{ translator, changeLeanguege }}>
      {children}
    </TranslatorContext.Provider>
  );
};
