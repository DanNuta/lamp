import { SliderType } from "./type";
import * as Style from "./Slider.style";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { AHref } from "../../Css/ElementSame";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

interface PropsHome {
  title: string;
  btn: string;
}

export const Slider: React.FC<SliderType> = (props) => {
  const { translator } = useContext(TranslatorContext) as Props;

  const homeText: PropsHome = {
    title: translator.home.title,
    btn: translator.home.btn,
  };

  const [counter, setCounter] = React.useState<number>(0);

  return (
    <Style.Container counter={counter} index={props.index}>
      <Style.Image src={props.image} />
      <Style.ImagesContainerText>
        <Style.ContainerText>
          <Style.H1>{homeText.title}</Style.H1>
          <Style.AHref href="#Catalog">
            <Style.iconHref>
              <EmojiObjectsIcon style={{ color: "rgba(245, 174, 13, 1)" }} />
            </Style.iconHref>

            {homeText.btn}
          </Style.AHref>
        </Style.ContainerText>
      </Style.ImagesContainerText>
    </Style.Container>
  );
};
