import * as Style from "./Slogan.style";
import { icons } from "../../assets";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { color } from "../../constants/color";
import { Container } from "@mui/material";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props } from "../../Context/type";

export const SloganView: React.FC = () => {
  const { translator } = useContext(TranslatorContext) as Props;

  const sloganTitle: string = translator.slogan.title;

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormatQuoteOutlinedIcon
        style={{ color: `${color.black}`, fontSize: 70 }}
      />

      <Style.H1>{sloganTitle}</Style.H1>
    </Container>
  );
};
