import { FilterView } from "../Filter/Filter.view";
import { filterItem } from "../../constants";
import React, {useEffect} from "react";
import { PropsFilter } from "../../constants/data/type";


interface BackendCategory {
  id: number,
  category: string
}

interface BackendCategorie extends BackendCategory {
  price: number,
  img: string,
  title: string,
}

// const filter = new Set(filterItem.map((item) => item.filter));
// const filterElement = [...filter];

export const Filter: React.FC = () => {

  const [dataDb, setDataDb] = React.useState<BackendCategorie[]>([]);
  const [categoryDB, setCategoryDb] = React.useState<BackendCategory[]>([]);

  const [filter, setFilter] = React.useState<BackendCategorie[]>([]);
  const [filterCheck, setFilterCheck] = React.useState<boolean>(false);


  useEffect(()=>{

    async function getData(){
      const data = await fetch("http://localhost:8000/catalog");
      const json = await data.json();
      setDataDb(json)
    };

    async function getCategory(){
      const category = await fetch("http://localhost:8000/category");
      const json = await category.json();
      setCategoryDb(json)
    }

    getCategory()
    getData();
   
  }, []);



  useEffect(() => {
    filterItemFn(categoryDB[0]);
  }, []);

  function cheackFilterBtn() {
    setFilterCheck((prev) => !prev);
  }

  function filterItemFn(data: BackendCategory) {
    const filterArray = dataDb.filter((item) => item.category === data.category);
    setFilter((prev) => (prev = filterArray));
  }

  return (
    <FilterView
      onHandlerFilter={filterItemFn}
      onHandlerFilterBtn={cheackFilterBtn}
      filterCategory={categoryDB}
      filterCheck={filterCheck}
      filter={dataDb}
    />
  );
};
