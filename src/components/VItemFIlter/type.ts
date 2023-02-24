import { PropsFilter } from "../../constants/data/type";

export interface PropsFilterItem extends PropsFilter {
  onHandler: (data: number) => void;
  index: number;
}
