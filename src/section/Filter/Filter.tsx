import { FilterView } from "../Filter/Filter.view";
import { filterItem } from "../../constants";
import React, {useEffect} from "react";
import { PropsFilter } from "../../constants/data/type";
import  axios  from 'axios';

const filter = new Set(filterItem.map((item) => item.filter));
const filterElement = [...filter];

export const Filter: React.FC = () => {
  const [filter, setFilter] = React.useState<PropsFilter[]>([]);
  const [filterCheck, setFilterCheck] = React.useState<boolean>(false);

  useEffect(() => {
    filterItemFn(filterElement[0]);
  }, []);

  function cheackFilterBtn() {
    setFilterCheck((prev) => !prev);
  }

  function filterItemFn(data: string) {
    const filterArray = filterItem.filter((item) => item.filter === data);

    setFilter((prev) => (prev = filterArray));
  }


  useEffect(()=>{


    axios.get(`http://localhost:8000/catalog`)
    .then(res => {
      const persons = res.data;
      console.log(persons)
    })



    async function getCatalog(){
      const data = await fetch("http://localhost:8000/catalog");
     

      console.log(data)
    }

   
  })




  return (
    <FilterView
      onHandlerFilter={filterItemFn}
      onHandlerFilterBtn={cheackFilterBtn}
      filterCategory={filterElement}
      filterCheck={filterCheck}
      filter={filter}
    />
  );
};
