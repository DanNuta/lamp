import React, { useState, useEffect } from "react";

export const useFetchCountry = (url: string) => {
  const [country, setCountry] = useState<any[]>([]);

  async function getCountry(url: string) {
    try {
      const data = await fetch(url);
      const json = await data.json();

      setCountry(json);
    } catch (error) {}
  }

  useEffect(() => {
    getCountry(url);
  }, []);

  return { country };
};
