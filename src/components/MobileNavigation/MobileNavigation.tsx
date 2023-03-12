import * as Style from "./MobileNavigation.style";
import { Link } from "react-router-dom";
import { icons } from "../../assets/";
import { Logo } from "../../assets/";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

interface MobileType {
  onHandeler: () => void;
  state: boolean;
}

export const MobileNavigation: React.FC<MobileType> = (props) => {
  const { translator, changeLeanguege } = useContext(
    TranslatorContext
  ) as Props;

  const nav: string[] = translator.navigation.nav;

  return (
    <Style.Container state={props.state}>
      <Style.ContainerLogoForMobile>
        <Logo />
        <div onClick={props.onHandeler}>{icons.cancel}</div>
      </Style.ContainerLogoForMobile>
      <Style.Ul>
        {nav.map((item, i) => {
          return (
            <Style.Li key={i}>
              <Style.AHref onClick={props.onHandeler} href={`#${item}`}>
                {item}
              </Style.AHref>
            </Style.Li>
          );
        })}

        <Style.Li style={{ cursor: "pointer" }}>
          <Style.span
            active={translator.languege === "en" ? true : false}
            onClick={() => changeLeanguege("en")}
          >
            en
          </Style.span>
          /
          <Style.span
            active={translator.languege === "deu" ? true : false}
            onClick={() => changeLeanguege("deu")}
          >
            deu
          </Style.span>
        </Style.Li>
      </Style.Ul>
    </Style.Container>
  );
};
