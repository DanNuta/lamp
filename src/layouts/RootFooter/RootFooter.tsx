import { Container } from "@mui/material";
import * as Style from "./RootFooter.style";
import { Grid } from "@mui/material";
import React from "react";
import { Logo } from "../../assets";
import { VSocialMedia } from "../../components";

import {footerContentText} from "../../TextContent/text";

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const link = ["Home", "About", "Catalog", "Galery", "Testinomial", "Contact"];


export const RootFooter: React.FC = () => {
  return (
    <Container>
      
      <Grid container>
        <Style.LogoGrid xs={12} sm={12} md={3} item>
          <Logo/>
        </Style.LogoGrid>

        <Style.LinksGrid xs={12} sm={12} md={3} item>
          

          <Style.TitleSectionFooter>Links</Style.TitleSectionFooter>

          <Style.linkUl>

            {
                link.map(item => {
                    return (
                        <Style.linkLi>
                            <Style.AHref href={`#${item}`}>{item}</Style.AHref>
                        </Style.linkLi>
                    )
                })
            }

          </Style.linkUl>

        </Style.LinksGrid>

        <Style.ContactLink xs={12} sm={12} md={3} item>
        <Style.TitleSectionFooter>Contact</Style.TitleSectionFooter>


          <Style.ul>
            <Style.li>
                <AccessTimeOutlinedIcon/>
                <Style.TextContact> {footerContentText.timeWork}</Style.TextContact>
            </Style.li>

            <Style.li>
                <LocalPhoneOutlinedIcon/>
                <Style.TextContact> {footerContentText.telefon}</Style.TextContact>
            </Style.li>

            <Style.li>
                <EmailOutlinedIcon/>
                <Style.TextContact> {footerContentText.email}</Style.TextContact>
            </Style.li>

            <Style.li>
                <LocationOnOutlinedIcon/>
                <Style.TextContact> {footerContentText.location}</Style.TextContact>
            </Style.li>
          </Style.ul>
        </Style.ContactLink>

        <Style.SocialMediaGrid item sm={12} xs={12} md={3}>
          <Style.TitleSectionFooter>Urmăriți-ne pe:</Style.TitleSectionFooter>
          <VSocialMedia/>
        </Style.SocialMediaGrid>
      </Grid>
    </Container>
  );
};
