import React from "react";
import { icons } from "../../assets";

export const Burgher: React.FC = () => {
  const [burgher, setBurgher] = React.useState<boolean>(false);

  function swichBurgher() {
    setBurgher((prev) => !prev);
  }

  return (
    <>
      {burgher ? (
        <div onClick={swichBurgher}>{icons.hanburgher}</div>
      ) : (
        <div onClick={swichBurgher}>{icons.cancel}</div>
      )}
    </>
  );
};
