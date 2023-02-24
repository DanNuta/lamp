import { VItemFIlterView } from "./VItemFilter.view";
import { PropsFilter } from "../../constants/data/type";
import React from "react";

export const VFilterItem: React.FC<PropsFilter> = (props) => {
  const [index, setIndex] = React.useState<number>(0);

  function dots(index: number) {
    setIndex((prev) => (prev = index));
  }
  return <VItemFIlterView {...props} onHandler={dots} index={index} />;
};
