import * as Style from "./About.style";
import { Container } from "@mui/material";
import { images } from "../../assets";
import { VButton } from "../../components";
import { DescriptionAbout } from "../../constants";
import React from "react";

export const About: React.FC = () => {

  const [readMore, setReadMore] = React.useState<boolean>(true);

  function readMoreFn(){
    setReadMore(prev => !prev);
  }

  return (
    <Container>
      <Style.H1>About</Style.H1>

      <Style.Container>
        <Style.ContainerItem>
          <Style.Image src={images.imagesHeader} />
        </Style.ContainerItem>

        <Style.ContainerItem>
          <Style.ContainerItemDiv>
          <Style.Paragraph>
            {readMore ? DescriptionAbout.substring(0, 1200) : DescriptionAbout}
          </Style.Paragraph>
         {readMore &&  <Style.Div></Style.Div>}
          </Style.ContainerItemDiv>

          <VButton cssStyle={{bg: "transparent", color: "black", border: "black", }}  title="Read more" onHaandler={readMoreFn} />
        </Style.ContainerItem>
      </Style.Container>
    </Container>
  );
};
