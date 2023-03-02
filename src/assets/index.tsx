import React from "react";
import {
  MenuIcon,
  CloseIcon,
  FilterAltIcon,
  ArrowForwardIosIcon,
  ArrowBackIosNewIcon,
} from "./icons/icons";

import imagesHeader from "../assets/images/lampHomePage.jpg";
import imagesHeader2 from "../assets/images/lampHomePage2.jpg";
import imagesHeader3 from "../assets/images/lampHomePage3.jpg";

import img1 from "../assets/images/catalogImages/1.jpeg";
import img2 from "../assets/images/catalogImages/2.jpeg";
import img3 from "../assets/images/catalogImages/3.jpeg";
import img4 from "../assets/images/catalogImages/4.jpeg";
import img5 from "../assets/images/catalogImages/5.jpeg";
import img6 from "../assets/images/catalogImages/6.jpeg";
import img7 from "../assets/images/catalogImages/7.jpeg";
import img8 from "../assets/images/catalogImages/8.jpeg";
import img9 from "../assets/images/catalogImages/8.jpeg";
import img10 from "../assets/images/catalogImages/10.jpeg";
import img11 from "../assets/images/catalogImages/11.jpeg";
import img12 from "../assets/images/catalogImages/12.jpeg";
import img13 from "../assets/images/catalogImages/13.jpeg";
import img14 from "../assets/images/catalogImages/14.jpeg";
import img15 from "../assets/images/catalogImages/15.jpeg";
import img16 from "../assets/images/catalogImages/16.jpeg";
import img17 from "../assets/images/catalogImages/17.jpeg";
import img18 from "../assets/images/catalogImages/18.jpeg";

import parallaxImage from "../assets/images/paralexEffect.jpg";

interface Icon {
  [key: string]: React.ReactNode;
}

interface Images {
  [key: string]: string;
}

export const icons: Icon = {
  hanburgher: <MenuIcon />,
  cancel: <CloseIcon />,
  filter: <FilterAltIcon />,
  next: <ArrowForwardIosIcon />,
  prev: <ArrowBackIosNewIcon />,
};

export const images: Images = {
  imagesHeader: imagesHeader,
  imagesHeader2: imagesHeader2,
  imagesHeader3: imagesHeader3,
  parallax: parallaxImage,
};

interface filterImages {
  [key: string]: string;
}

export const filterImages = {
  filter1: img1,
  filter2: img2,
  filter3: img3,
  filter4: img4,
  filter5: img5,
  filter6: img5,
  filter7: img6,
  filter8: img7,
  filter9: img8,
  filter10: img9,
  filter11: img10,
  filter13: img11,
  filter14: img12,
  filter15: img13,
};

export const imagesGalery = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];
