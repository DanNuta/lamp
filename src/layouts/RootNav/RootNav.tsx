import { Link, Outlet } from "react-router-dom";
import * as Style from "./RootNav.style";
import { Container } from "@mui/material";

import { Logo } from "../../assets";

import { icons } from "../../assets";
import React from "react";
import { MobileNavigation } from "../../components/";

export const RootNav: React.FC = () => {
  const [burgher, setBurgher] = React.useState<boolean>(false);

  function swichBurgher() {
    setBurgher((prev) => !prev);
  }

  return (
    <Container>
      <Style.Container>
        <Style.Header>
          <Style.LogoContainer>
            <Link to="#">
              <Logo />
            </Link>
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
              <Style.Li>
                <Link to="#home">Home</Link>
              </Style.Li>
              <Style.Li>
                <Link to="#about">About</Link>
              </Style.Li>
              <Style.Li>
                <Link to="#catalog">Catalog</Link>
              </Style.Li>
              <Style.Li>
                <Link to="#galery">Galery</Link>
              </Style.Li>
              <Style.Li>
                <Link to="#testinomial">Testimonials</Link>
              </Style.Li>
              <Style.Li>
                <Link to="#contact">Contact</Link>
              </Style.Li>
            </Style.Ul>
          </Style.Navigation>
        </Style.Header>
      </Style.Container>
    </Container>
  );
};
