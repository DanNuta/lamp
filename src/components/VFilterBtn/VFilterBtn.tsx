import { Props } from "./type";
import * as Style from "./VFilterBtn.style";
import { VButton } from "../";

export const VFilterBtn: React.FC<Props> = (props) => {
  return (
    <Style.FilterCategory>
      {props.filterCategory.map((item, i) => {
        return (
          <VButton
            key={i}
            onHandler={() => props.onHandlerFilter(item)}
            title={`${item}`}
            cssStyle={{
              color: props.filterData === item ? "white" : "black",
              border:
                props.filterData === item ? "transparent" : "rgba(0, 0, 0)",
              bg:
                props.filterData === item
                  ? "rgba(0, 0, 0, 0.4)"
                  : "transparent",
            }}
          />
        );
      })}
    </Style.FilterCategory>
  );
};
