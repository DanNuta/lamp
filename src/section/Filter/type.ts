import { PropsFilter } from "../../constants/data/type";

export interface Props {
  filterCategory: string[];
  onHandlerFilter: (data: string) => void;
  onHandlerFilterBtn: () => void;
  filterCheck: boolean;
  filter: PropsFilter[];
}
