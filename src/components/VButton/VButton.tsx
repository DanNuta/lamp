import * as Style from "./VButton.style";
import { BtnProps, LinkProps } from "./type";
import { Link } from "react-router-dom";

export const VButton: React.FC<BtnProps> = (props) => {
  return (
    <Style.Button {...props.cssStyle} onClick={props.onHandler}>
      {props.title}
    </Style.Button>
  );
};

export const ButtonLink: React.FC<LinkProps> = (props) => {
  return <Style.LinkSyle to={`${props.href}`}>gfgfgfgf</Style.LinkSyle>;
};
