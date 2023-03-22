import { PropsFilter } from "../../constants/data/type";

interface BackendCategory {
  id: string;
  category: string;
}

interface BackendCategorie extends BackendCategory {
  price: number;
  img: string;
  title: string;
}

export interface Props {
  filterCategory: BackendCategory[] | null;
  onHandlerFilter: (data: string) => void;
  onHandlerFilterBtn: () => void;
  filterCheck: boolean;
  filter: BackendCategorie[] | null;
}
