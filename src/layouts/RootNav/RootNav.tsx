import { Link, Outlet } from "react-router-dom";
import * as Style from "./RootNav.style";
import { Container } from "@mui/material";

import { Logo } from "../../assets";

import { icons } from "../../assets";
import React, { useContext } from "react";
import { MobileNavigation } from "../../components/";

import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

export const RootNav: React.FC = () => {
  const [burgher, setBurgher] = React.useState<boolean>(false);

  function swichBurgher() {
    setBurgher((prev) => !prev);
  }

  const { translator, changeLeanguege } = useContext(
    TranslatorContext
  ) as Props;

  const nav: string[] = translator.navigation.nav;

  return (
    <Container>
      <Style.Container>
        <Style.Header>
          <Style.LogoContainer>
            <Style.AHref href="#">
              <Logo />
            </Style.AHref>
          </Style.LogoContainer>

          {burgher && (
            <Style.MobileContainer state={burgher}>
              <MobileNavigation state={burgher} onHandeler={swichBurgher} />
            </Style.MobileContainer>
          )}

          <Style.Navigation>
            {!burgher && (
              <Style.BarsNav onClick={swichBurgher}>
                {icons.hanburgher}
              </Style.BarsNav>
            )}

            {burgher
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "")}

            <Style.Ul>
              {nav.map((item, i) => {
                return (
                  <Style.Li key={i}>
                    <Style.AHref href={`#${item}`}>{item}</Style.AHref>
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
          </Style.Navigation>
        </Style.Header>
      </Style.Container>
    </Container>
  );
};
