import * as Style from "./Galery.style";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { imagesGalery } from "../../assets";
import { Container } from "@mui/system";
import { GaleryType } from "./type";
import { icons } from "../../assets";

export const GaleryView: React.FC<GaleryType> = (props) => {
  return (
    <Container>
      <h1>Galery</h1>

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

      <Style.ButtonStyle onClick={props.showMoreItems} variant="contained">
        {props.images.length === imagesGalery.length
          ? "Show Less"
          : "Show More"}
      </Style.ButtonStyle>
    </Container>
  );
};
