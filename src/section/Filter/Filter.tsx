import { FilterView } from "../Filter/Filter.view";
//import { filterItem } from "../../constants";
import React, { useEffect } from "react";
import { PropsFilter } from "../../constants/data/type";
import { firestore } from "../../firebase/confog";

interface BackendCategory {
  id: string;
  category: string;
}

interface BackendCategorie extends BackendCategory {
  price: number;
  img: string;
  title: string;
}

export const Filter: React.FC = () => {
  const [dataDb, setDataDb] = React.useState<BackendCategorie[] | null>([]);
  const [categoryDB, setCategoryDb] = React.useState<BackendCategory[] | null>(
    []
  );

  //element din dataDbAfter filter;
  const [filter, setFilter] = React.useState<BackendCategorie[] | null>([]);
  const [filterCheck, setFilterCheck] = React.useState<boolean>(false);

  useEffect(() => {
    firestore
      .collection("lamp_catalog")
      .get()
      .then(function (snapshot) {
        let data: any = [];
        snapshot.docs.forEach((item) => {
          data.push({ id: item.id, ...item.data() });
        });

        setDataDb(data);

        setFilter((prev) => {
          const itemFilter: BackendCategorie[] = data.filter(
            (item: BackendCategorie) => data[0].category === item.category
          );

          return itemFilter;
        });
      });

    firestore
      .collection("lamp_category")
      .get()
      .then(function (snapshot) {
        let data: any = [];
        snapshot.docs.forEach((item) => {
          data.push({ id: item.id, ...item.data() });
        });
        setCategoryDb(data);
      });

    // async function getData() {
    //   const data = await fetch("http://localhost:8000/catalog");
    //   const json: any = await data.json();
    //   setDataDb(json);

    //   setFilter((prev) => {
    //     const itemFilter: BackendCategorie[] = json.filter(
    //       (item: BackendCategorie) => item.category === json[0].category
    //     );

    //     return itemFilter;
    //   });
    // }

    // async function getCategory() {
    //   const category = await fetch("http://localhost:8000/category");
    //   const json = await category.json();
    //   setCategoryDb(json);
    // }

    // getCategory();
    // getData();
  }, []);

  function cheackFilterBtn() {
    setFilterCheck((prev) => !prev);
  }

  function filterItemFn(data: string) {
    const filterArray = dataDb!.filter((item) => item.category === data);
    setFilter(filterArray);
  }

  return (
    <FilterView
      onHandlerFilter={filterItemFn}
      onHandlerFilterBtn={cheackFilterBtn}
      filterCategory={categoryDB}
      filterCheck={filterCheck}
      filter={filter}
    />
  );
};
