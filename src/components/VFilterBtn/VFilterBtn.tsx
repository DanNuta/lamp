import { Props } from "./type";
import * as Style from "./VFilterBtn.style";
import { VButton } from "../";
import { BtnFilter } from "../../Css/ElementSame";
import { color } from "../../constants/color";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface PropsStyle {
  colorText?: string;
  bg: string;
  border: string;
}

export const VFilterBtn: React.FC<Props> = (props) => {
  const BtnFilter = styled(Button)<PropsStyle>(
    ({ theme, colorText, bg, border }) => ({
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "12px",
      paddingInline: "15px",
      paddingBlock: "13px",
      color: `${colorText}`,
      border: `1px solid ${border}`,
      backgroundColor: `${bg}`,

      "&:hover": {
        backgroundColor: "white",
        color: `${color.black}`,
        border: `1px solid ${color.black}`,
      },
    })
  );

  return (
    <Style.FilterCategory>
      {props.filterCategory.map((item, i) => {
        return (
          <BtnFilter
            colorText={props.filterData === item ? `${color.black}` : "white"}
            bg={props.filterData === item ? "white" : `${color.black}`}
            border={
              props.filterData === item ? `${color.black}` : "transparent"
            }
            onClick={() => props.onHandlerFilter(item)}
            key={i}
          >
            {`${item}`}
          </BtnFilter>
        );
      })}
    </Style.FilterCategory>
  );
};
