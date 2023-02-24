import * as Style from "./VDots.style";
import { DotsType, DotsRenderType } from "./type";

const DotsBtn: React.FC<DotsType> = (props) => {
  return (
    <Style.Button
      index={props.index}
      i={props.i}
      onClick={props.onHandler}
    ></Style.Button>
  );
};

export const VDots: React.FC<DotsRenderType> = (props) => {
  return (
    <Style.RenderDots>
      {props.img.map((item, i) => {
        return (
          <DotsBtn
            i={i}
            index={props.index}
            key={i}
            onHandler={() => props.onHandler(i)}
          />
        );
      })}
    </Style.RenderDots>
  );
};
