import { Container } from "@mui/material";
import * as Style from "./RootFooter.style";
import { Grid } from "@mui/material";
import { Logo } from "../../assets";
import { VSocialMedia } from "../../components";
import { color } from "../../constants/color";
import { LogoDark } from "../../constants/data/logoDark";

import { footerContentText } from "../../TextContent/text";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

interface FooterProps {
  nav: string[];
  section: {
    links: string;
    contact: string;
    social_media: string;
  };
  copyright: string;
}

const date = new Date().getFullYear();

export const RootFooter: React.FC = () => {
  const { translator } = useContext(TranslatorContext) as Props;

  const footerPross: FooterProps = {
    nav: translator.footer.nav,
    section: {
      links: translator.footer.section.links,
      contact: translator.footer.section.contact,
      social_media: translator.footer.section.social_media,
    },
    copyright: translator.footer.copyright,
  };

  return (
    <Style.ContainerParent>
      <Container>
        <Style.ContainerGrid container>
          <Style.LogoGrid xs={12} sm={12} md={3} item>
            <Style.AHref href="#">
              <LogoDark />
            </Style.AHref>
          </Style.LogoGrid>

          <Style.LinksGrid xs={12} sm={12} md={3} item>
            <Style.TitleSectionFooter>
              {footerPross.section.links}
            </Style.TitleSectionFooter>

            <Style.linkUl>
              {footerPross.nav.map((item, i) => {
                return (
                  <Style.linkLi key={i}>
                    <Style.AHref href={`#${item}`}>{item}</Style.AHref>
                  </Style.linkLi>
                );
              })}
            </Style.linkUl>
          </Style.LinksGrid>

          <Style.ContactLink xs={12} sm={12} md={3} item>
            <Style.TitleSectionFooter>
              {footerPross.section.contact}
            </Style.TitleSectionFooter>

            <Style.ul>
              <Style.li>
                <AccessTimeOutlinedIcon style={{ color: "white" }} />
                <Style.TextContact>
                  {footerContentText.timeWork}
                </Style.TextContact>
              </Style.li>

              {/* <Style.li>
                <LocalPhoneOutlinedIcon />
                <Style.TextContact>
                  {" "}
                  {footerContentText.telefon}
                </Style.TextContact>
              </Style.li> */}

              <Style.li>
                <EmailOutlinedIcon style={{ color: "white" }} />
                <Style.TextContact>
                  {" "}
                  {footerContentText.email}
                </Style.TextContact>
              </Style.li>

              <Style.li>
                <LocationOnOutlinedIcon style={{ color: "white" }} />
                <Style.TextContact>
                  {" "}
                  {footerContentText.location}
                </Style.TextContact>
              </Style.li>
            </Style.ul>
          </Style.ContactLink>

          <Style.SocialMediaGrid item sm={12} xs={12} md={3}>
            <Style.TitleSectionFooter>
              {footerPross.section.social_media}
            </Style.TitleSectionFooter>
            <VSocialMedia color="white" />
          </Style.SocialMediaGrid>
        </Style.ContainerGrid>
      </Container>

      <Style.FooterElement>
        <Style.FooterParaghraph>{footerPross.copyright}</Style.FooterParaghraph>
      </Style.FooterElement>
    </Style.ContainerParent>
  );
};
