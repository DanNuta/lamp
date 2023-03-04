import { Container } from "@mui/system";
import { testimonials } from "../../constants";
import * as Style from "./Testimonials.style";
import { Testimonial } from "../../components";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const TestimonialView: React.FC = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollValue = ref.current!.scrollWidth;
    const screenWidth = ref.current!.offsetWidth;

    setWidth((prev) => {
      return (prev = scrollValue - screenWidth);
    });
  }, []);

  return (
    <Container>
      <Style.H1>What out customers are saying</Style.H1>

      <Style.ContainerParent ref={ref}>
        <Style.ContainerChid
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {testimonials.map((item, i) => {
            return <Testimonial key={i} {...item} />;
          })}
        </Style.ContainerChid>
      </Style.ContainerParent>
    </Container>
  );
};
