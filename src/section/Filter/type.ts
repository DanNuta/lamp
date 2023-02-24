import { PropsFilter } from "../../constants/data/item";

export interface Props {
    filterCategory: string[],
    onHandlerFilter: (data: string) => void,
    onhandlerFilterBtn: () => void,
    filterCheck: boolean;
    filter: PropsFilter[]
}
