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
            <Style.Paragraph>
              {readMore
                ? DescriptionAbout.substring(0, 1200)
                : DescriptionAbout}
            </Style.Paragraph>
            {readMore && <Style.Div></Style.Div>}
          </Style.ContainerItemDiv>

          <Btn onClick={readMoreFn}>Read More</Btn>
        </Style.ContainerItem>
      </Style.ContainerElement>
    </Style.ContainerStyle>
  );
};
