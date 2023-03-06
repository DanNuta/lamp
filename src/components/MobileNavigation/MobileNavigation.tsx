import * as Style from "./MobileNavigation.style";
import { Link } from "react-router-dom";
import { icons } from "../../assets/";
import { Logo } from "../../assets/";

interface MobileType {
  onHandeler: () => void;
  state: boolean;
}

const nav = ["Home", "About", "Catalog", "Galery", "Testinomial", "Contact"];

export const MobileNavigation: React.FC<MobileType> = (props) => {
  return (
    <Style.Container state={props.state}>
      <Style.ContainerLogoForMobile>
        <Logo></Logo>
        <div onClick={props.onHandeler}>{icons.cancel}</div>
      </Style.ContainerLogoForMobile>
      <Style.Ul>
        {nav.map((item, i) => {
          return (
            <Style.Li key={i}>
              <Style.AHref onClick={props.onHandeler} href={`#${item}`}>
                {item}
              </Style.AHref>
            </Style.Li>
          );
        })}
      </Style.Ul>
    </Style.Container>
  );
};
