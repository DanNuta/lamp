import { ContactView } from "./Contact.view";
import { useFetchCountry } from "../../hooks/useFetchCountry";
import { PropsData } from "./type";
import React from "react";

export const Contact: React.FC = () => {
  const [countryList, setCountrylist] = React.useState<PropsData[]>([]);

  const { country } = useFetchCountry("https://restcountries.com/v3.1/all");

  React.useEffect(() => {
    getCountryData();
  }, [country]);

  function getCountryData() {
    for (let item of country) {
      const countryItems: PropsData = {
        flags: item.flags.png,
        iddRoot: item.idd.root,
        nameCountry: item.name.common,
      };

      setCountrylist((prev) => {
        return [...prev, countryItems];
      });
    }
  }

  return <ContactView country={countryList} />;
};
