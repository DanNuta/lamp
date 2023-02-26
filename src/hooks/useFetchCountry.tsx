import React, { useState, useEffect } from "react";

interface PropsData {
  flags: string;
  iddRoot: number;
  suffixes?: number;
  nameCountry: string;
}

export const useFetchCountry = (url: string) => {
  const [country, setCountry] = useState<any[]>([]);

  useEffect(() => {
    async function getCountry(url: string) {
      try {
        const checkItem = localStorage.getItem("country");

        if (checkItem) {
          const dataLocal = JSON.parse(checkItem);
          setCountry((prev) => {
            return dataLocal;
          });
        } else {
          const data = await fetch(url);
          const json = await data.json();
          const filterData = getCountryData(json);
          localStorage.setItem("country", JSON.stringify(filterData));
          setCountry(filterData);
        }
      } catch (error) {}
    }

    getCountry(url);
  }, []);

  return { country };
};

function getCountryData(arr: any) {
  let data = [];
  for (let item of arr) {
    const countryItems = {
      flags: item.flags.png,
      iddRoot: item.idd.root,
      nameCountry: item.name.common,
    };
    data.push(countryItems);
  }
  return data;
}
