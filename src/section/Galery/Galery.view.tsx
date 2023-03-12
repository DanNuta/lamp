import * as Style from "./Galery.style";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { imagesGalery } from "../../assets";
import { Container } from "@mui/system";
import { GaleryType } from "./type";
import { icons } from "../../assets";
import { TitleSection, Btn } from "../../Css/ElementSame";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

interface PropsGalery {
  title: string;
  btn: string[];
  section: string;
}

export const GaleryView: React.FC<GaleryType> = (props) => {
  const { translator } = useContext(TranslatorContext) as Props;

  const translationText = {
    title: translator.galery.title,
    btn: translator.galery.btn,
    section: translator.sections.galery,
  };

  return (
    <Style.ContainerStyle id={`${translationText.section}`}>
      <TitleSection>{translationText.title}</TitleSection>

      {props.data.img && (
        <Style.ContainerImages onClick={props.closeShowItem}>
          <Style.CloseIcon onClick={props.closeShowItem}>
            {icons.cancel}
          </Style.CloseIcon>

          <Style.NextItem onClick={props.prevBtn}>{icons.prev}</Style.NextItem>

          <Style.ImageElementClick>
            <Style.Image src={props.data.img} alt="" />
          </Style.ImageElementClick>

          <Style.NextItem onClick={props.nextBtn}>{icons.next}</Style.NextItem>
        </Style.ContainerImages>
      )}

      <Style.ContainerParent>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {props.images.map((item, i) => {
              return (
                <Style.Image
                  src={`${item}`}
                  key={i}
                  onClick={() => props.onShowImage(item, i)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>

        <Style.ContainerBtn>
          <Btn onClick={props.showMoreItems}>
            {props.images.length === imagesGalery.length
              ? `${translationText.btn[1]}`
              : `${translationText.btn[0]}`}
          </Btn>
        </Style.ContainerBtn>
      </Style.ContainerParent>
    </Style.ContainerStyle>
  );
};
