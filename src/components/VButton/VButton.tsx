import * as Style from "./VButton.style";
import { Props } from "./type";

export const VButton: React.FC<Props> = (props) => {
    
  return <Style.Button {...props.cssStyle} onClick={props.onHaandler}>{props.title}</Style.Button>;
};
