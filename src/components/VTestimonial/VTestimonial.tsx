import * as Style from "./VTestimonial.style";
import { testimonial } from "../../constants/data/type";
import { icons } from "../../assets";
import {Paraghraph} from "../../Css/ElementSame";

export const Testimonial: React.FC<testimonial> = (props) => {
  return (
    <Style.Container>
      {icons.quote}
      <Paraghraph style={{fontStyle: "italic"}}>{props.testimonial}</Paraghraph>
    </Style.Container>
  );
};
