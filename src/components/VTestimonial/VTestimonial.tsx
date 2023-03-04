import * as Style from "./VTestimonial.style";
import { testimonial } from "../../constants/data/type";
import { icons } from "../../assets";

export const Testimonial: React.FC<testimonial> = (props) => {
  return (
    <Style.Container>
      {icons.quote}
      <Style.H1>{props.testimonial}</Style.H1>
    </Style.Container>
  );
};
