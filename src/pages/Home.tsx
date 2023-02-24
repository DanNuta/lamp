import {
  About,
  Contact,
  Filter,
  Galery,
  Testimonial,
  SloganView,
  Home,
  Map,
} from "../section";

export const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Filter />
      <SloganView />
      <Galery />
      <Testimonial />
      <Map />
      <Contact />
    </>
  );
};
