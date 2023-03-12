import * as Style from "./About.style";
import { images } from "../../assets";
import { TitleSection } from "../../Css/ElementSame";
import { Btn } from "../../Css/ElementSame";
import { Paraghraph } from "../../Css/ElementSame";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

interface PropsTranslator {
  title: string;
  desc: string;
  btn: string[];
}

export const About: React.FC = () => {
  const { translator } = useContext(TranslatorContext) as Props;

  const translatorAbout: PropsTranslator = {
    title: translator.about.title,
    desc: translator.about.desc,
    btn: translator.about.btn,
  };

  const [readMore, setReadMore] = React.useState<boolean>(false);

  function readMoreFn() {
    setReadMore((prev) => !prev);
  }

  return (
    <div id="About">
      {readMore && (
        <Style.ContainerStyle>
          <TitleSection>{translatorAbout.title}</TitleSection>

          <Style.ContainerElement>
            <Style.ContainerItem>
              <Style.Image src={images.imagesHeader} />
            </Style.ContainerItem>

            <Style.ContainerItem>
              <Style.ContainerItemDiv>
                <Paraghraph>{translatorAbout.desc}</Paraghraph>
              </Style.ContainerItemDiv>
            </Style.ContainerItem>
          </Style.ContainerElement>
        </Style.ContainerStyle>
      )}

      <Style.CenterBtn margin={readMore}>
        <Btn onClick={readMoreFn}>
          {readMore ? `${translatorAbout.btn[0]}` : `${translatorAbout.btn[1]}`}
        </Btn>
      </Style.CenterBtn>
    </div>
  );
};
