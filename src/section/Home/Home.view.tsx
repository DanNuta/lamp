import * as Style from "./Home.style";
import { slider } from "../../constants";
import { Slider } from "../../components";

export const HomeView: React.FC = () => {
  return (
    <Style.Main>
      {slider.map((item, i) => {
        return <Slider key={i} {...item} lenght={slider.length} index={i} />;
      })}
    </Style.Main>
  );
};
