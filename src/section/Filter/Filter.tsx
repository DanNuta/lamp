import { FilterView } from "../Filter/Filter.view";
import {filterItem} from "../../constants";
import React from "react";
import { PropsFilter } from "../../constants/data/item";
import {icons} from "../../assets";

const filter = new Set(filterItem.map(item => item.filter));
const filterElement = [...filter];

export const Filter: React.FC = () => {
  const [filter, setFilter] = React.useState<PropsFilter[]>([]);
  const [filterCheck, setFilterCheck] = React.useState<boolean>(false);


  React.useEffect(() => {
    filterItemFn(filterElement[0])
  }, [])

  function cheackFilterBtn(){
    setFilterCheck(prev => !prev)
  }



  function filterItemFn(data: string){

    const filterArray = filterItem.filter(item => item.filter === data);

    setFilter(prev => prev = filterArray);

  }
  return <FilterView 
            onHandlerFilter={filterItemFn}
            onhandlerFilterBtn={cheackFilterBtn}
            filterCategory={filterElement} 
            filterCheck={filterCheck}
            filter={filter}
            />;
};
