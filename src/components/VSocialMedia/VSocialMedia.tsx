import { socialMedia } from "../../assets";
import * as Style from "./VSocialMedia.style";


export const VSocialMedia: React.FC = () => {
    return (
        <Style.Container>
          <Style.AHref target="_blank" href="">{socialMedia.instagram}</Style.AHref>
          <Style.AHref target="_blank" href="">{socialMedia.facebook}</Style.AHref>
          <Style.AHref target="_blank" href="">{socialMedia.telegram}</Style.AHref>
          <Style.AHref target="_blank" href="">{socialMedia.whatsAppIcon}</Style.AHref>


        </Style.Container>
    )
}