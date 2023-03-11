import {
  About,
  Contact,
  Filter,
  Galery,
  Testimonial,
  SloganView,
  Home,
  MapView,
} from "../section";

export const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Filter />
      <SloganView />
      <Galery />
      {/* <Testimonial /> */}
      <MapView />
      <Contact />
    </>
  );
};
