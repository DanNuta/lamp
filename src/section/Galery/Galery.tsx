import { GaleryView } from "./Galery.view";
import React from "react";
import { dataProps } from "./type";
import { imagesGalery } from "../../assets";

export const Galery: React.FC = () => {
  const [data, setData] = React.useState<dataProps>({ img: "", i: 0 });
  const [images, setimages] = React.useState<string[]>(
    imagesGalery.slice(0, 6)
  );

  function showImage(img: string, i: number) {
    setData((prev) => {
      return {
        img: img,
        i: i,
      };
    });
  }

  function closeShowItem(e: any) {
    const target = e.target.nodeName;

    if (target === "DIV") {
      setData((prev) => {
        return {
          img: "",
          i: 1,
        };
      });
    }
  }

  function nextBtn() {
    setData((prev) => {
      if (imagesGalery.length === prev.i) {
        return {
          img: "",
          i: 1,
        };
      } else {
        return {
          img: imagesGalery[prev.i + 1],
          i: prev.i + 1,
        };
      }
    });
  }

  function prevBtn() {
    setData((prev) => {
      if (prev.i === 0) {
        return {
          img: "",
          i: 1,
        };
      } else {
        return {
          img: imagesGalery[prev.i - 1],
          i: prev.i - 1,
        };
      }
    });
  }

  function showMoreItems() {
    const checkLength = imagesGalery.length - images.length;

    console.log(checkLength);

    if (checkLength > 6) {
      const lengthElement = images.length + 3;
      const newItem = imagesGalery.slice(0, lengthElement);
      setimages((prev) => {
        return (prev = newItem);
      });
    } else {
      const newItem = imagesGalery.slice(0, imagesGalery.length);
      setimages((prev) => {
        return (prev = newItem);
      });
    }

    if (imagesGalery.length === images.length) {
      const newItem = imagesGalery.slice(0, 6);
      setimages((prev) => {
        return (prev = newItem);
      });
    }
  }

  return (
    <GaleryView
      onShowImage={showImage}
      closeShowItem={closeShowItem}
      nextBtn={nextBtn}
      prevBtn={prevBtn}
      data={data}
      images={images}
      showMoreItems={showMoreItems}
    />
  );
};
