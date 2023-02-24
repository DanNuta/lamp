import {filterImages} from "../../assets";

export interface PropsFilter {
    img: string[],
    filter: string,
    price: number,
    description: string
}

export const filterItem: PropsFilter[] = [
    {
        img: [filterImages.filter1, filterImages.filter1],
        filter: "solare",
        price: 45,
        description: "lorem ipsum"
    },

    {
        img: [filterImages.filter3, filterImages.filter4],
        filter: "solare",
        price: 45,
        description: "lorem ipsum"
    },


    {
        img: [filterImages.filter3, filterImages.filter4],
        filter: "lamp",
        price: 45,
        description: "lorem ipsum"
    },

    {
        img: [filterImages.filter6, filterImages.filter8],
        filter: "lamp",
        price: 45,
        description: "lorem ipsum"
    },

    {
        img: [filterImages.filter10, filterImages.filter15],
        filter: "lamp",
        price: 65,
        description: "lorem ipsum lorem ipsum dolom"
    },

    {
        img: [filterImages.filter10, filterImages.filter15],
        filter: "of meteal",
        price: 65,
        description: "lorem ipsum lorem ipsum dolom"
    },


]