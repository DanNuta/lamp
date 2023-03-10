import * as Style from "./VItemFileter.style";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import { VDots } from "../";
import { PropsFilterItem } from "./type";
import { AHref } from "../../Css/ElementSame";

export const VItemFIlterView: React.FC<PropsFilterItem> = (props) => {
  return (
    <Style.ParentCard sx={{ maxWidth: 345 }}>
      <Style.ImageSliderItem>
        {props.img.map((item, i) => {
          return (
            <Style.ImagesContainer key={i} index={props.index} i={i}>
              <CardMedia component="img" height="100%" image={`${item}`} />
              <Style.BackroundElement />
            </Style.ImagesContainer>
          );
        })}

        <VDots
          index={props.index}
          onHandler={props.onHandler}
          img={props.img}
        />
      </Style.ImageSliderItem>

      <CardContent>
        <Style.TypographyTitle gutterBottom variant="h5">
          {props.filter}
        </Style.TypographyTitle>
        <Style.TypographyPrice variant="body2" color="text.secondary">
          ${props.price}
        </Style.TypographyPrice>
      </CardContent>

      <CardActions>
        <AHref padding="13px 15px" href="#Galery">
          More info
        </AHref>
      </CardActions>
    </Style.ParentCard>
  );
};
