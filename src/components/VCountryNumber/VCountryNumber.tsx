import { VCountryNumberView } from "./VCountryNumber.view";
import { FlagProps } from "./type";
import React from "react";
import { Props } from "./type";

export const VCountryNumber: React.FC<FlagProps> = (props) => {


  const defaultData: Props ={
    flags: props.countryName?.[0]?.flags,
    code: props.countryName?.[0]?.iddRoot,
  }

  const [showMoreCountry, setShowMoreCountry] = React.useState(false);
  const [flagCode, setFlagCode] = React.useState<Props>(defaultData);


  React.useEffect(() => {
    setFlagCode(prev => {
      return defaultData
    })
  },[props.countryName])

  function showMoreCountryFn() {
    setShowMoreCountry((prev) => !prev);
  }


  function updateInitialFlag(data: Props){
    setFlagCode(prev => {
      return {
        flags: data.flags,
        code: data.code
      }
    })

    setShowMoreCountry((prev) => !prev);
  }

  return (
    <VCountryNumberView
      countryName={props.countryName}
      moreCountry={showMoreCountry}
      moreCountryFn={showMoreCountryFn}
      stateCountryCode={flagCode}
      updateInitialFlag={updateInitialFlag}
    />
  );
};
