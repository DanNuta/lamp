import { Props } from "./type";
import * as Style from "./VFilterBtn.style";
import { VButton } from "../";
import { BtnFilter } from "../../Css/ElementSame";
import { color } from "../../constants/color";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface PropsStyle {
  colortext?: string;
  bg: string;
  border: string;
}

export const VFilterBtn: React.FC<Props> = (props) => {
  const BtnFilter = styled(Button)<PropsStyle>(
    ({ theme, colortext, bg, border }) => ({
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "12px",
      paddingInline: "15px",
      paddingBlock: "13px",
      color: `${colortext}`,
      //border: `1px solid ${border}`,
      backgroundColor: `${bg}`,
      borderRadius: 0,
      //fontFamily: "Tilda Sanns",

      "&:hover": {
        backgroundColor: `${color.btnHover}`,
        color: `${color.colorHoverBtn}`,
        //border: `1px solid ${color.btnHover}`,
      },
    })
  );

  return (
    <Style.FilterCategory>
      {props.filterCategory?.map((item, i) => {
        return (
          <BtnFilter
            colortext={
              props.filterData?.category === item.category
                ? `${color.black}`
                : "white"
            }
            bg={
              props.filterData?.category === item.category
                ? `${color.btnHover}`
                : `${color.black}`
            }
            border={
              props.filterData?.category === item.category
                ? `${color.black}`
                : "transparent"
            }
            onClick={() => props.onHandlerFilter(item.category)}
            key={i}
          >
            {`${item.category}`}
          </BtnFilter>
        );
      })}
    </Style.FilterCategory>
  );
};
