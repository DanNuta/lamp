import * as Style from "./About.style";
import { Container } from "@mui/material";
import { images } from "../../assets";
import { VButton } from "../../components";
import { DescriptionAbout } from "../../constants";
import { TitleSection } from "../../Css/ElementSame";
import { Btn } from "../../Css/ElementSame";
import React from "react";

export const About: React.FC = () => {
  const [readMore, setReadMore] = React.useState<boolean>(true);

  function readMoreFn() {
    setReadMore((prev) => !prev);
  }

  return (
    <Style.ContainerStyle id="About">
      <TitleSection>About</TitleSection>

      <Style.ContainerElement>
        <Style.ContainerItem>
          <Style.Image src={images.imagesHeader} />
        </Style.ContainerItem>

        <Style.ContainerItem>
          <Style.ContainerItemDiv>
            {/* <Style.Paragraph>
              {readMore
                ? DescriptionAbout.substring(0, 1200)
                : DescriptionAbout}
            </Style.Paragraph> */}

            <Style.Paragraph>
            Lifting people’s quality of life with light - since 2015

            <br/>
            <br/>
            

We're passionate about inspiring people to make the most of lighting. The Italian tradition and passion for great lighting combined with world class technology enables us to deliver a wide range of products with a superior combination of lasting quality, great design and user-friendly functionality - at competitive prices.



<br/>
            <br/>

Acma's products light up the dark in more than 15 countries and are sold by more than 300 dealers worldwide.



<br/>
            <br/>

Acmas Group consists of three brands: Nordlux, Design For The People and Energetic.
            </Style.Paragraph>



            {readMore && <Style.Div></Style.Div>}
          </Style.ContainerItemDiv>

          <Btn onClick={readMoreFn}>Read More</Btn>
        </Style.ContainerItem>
      </Style.ContainerElement>
    </Style.ContainerStyle>
  );
};
