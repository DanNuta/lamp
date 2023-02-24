import * as Style from "./MobileNavigation.style";
import { Link } from "react-router-dom";
import { icons } from "../../assets/";

interface MobileType {
  onHandeler: () => void;
  state: boolean;
}

const nav = ["home", "about", "catalog", "galery", "testinomial", "contact"];

export const MobileNavigation: React.FC<MobileType> = (props) => {
  return (
    <Style.Container state={props.state}>
      <Style.ContainerLogoForMobile>
        <h1>Logo</h1>
        <div onClick={props.onHandeler}>{icons.cancel}</div>
      </Style.ContainerLogoForMobile>
      <Style.Ul>
        {nav.map((item, i) => {
          return (
            <Style.Li key={i}>
              <Link onClick={props.onHandeler} to={`#${item}`}>
                {item}
              </Link>
            </Style.Li>
          );
        })}
      </Style.Ul>
    </Style.Container>
  );
};
