import * as Style from "./VItemFileter.style";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { VDots } from "../";
import { PropsFilterItem } from "./type";
import { BtnFilter } from "../../Css/ElementSame";

export const VItemFIlterView: React.FC<PropsFilterItem> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Typography gutterBottom variant="h5" component="div">
          {props.filter}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${props.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Style.AHref href="#galery">More info</Style.AHref>
      </CardActions>
    </Card>
  );
};
