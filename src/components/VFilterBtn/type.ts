interface BackendCategory {
  id: number,
  category: string
}

interface BackendCategorie extends BackendCategory {
  price: number,
  img: string,
  title: string,
}

export interface Props {
  filterCategory: BackendCategory[];
  onHandlerFilter: (data: BackendCategory) => void;
  filterData?: BackendCategory;
}
