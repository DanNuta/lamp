import * as Style from "./VContainer.style";
import { FlagProps } from "../VCountryNumber/type";
import { Typography } from "@mui/material";
import {ItemData , ItemProps, Props} from "./type";
import TextField from '@mui/material/TextField';
import { ChangeEvent } from "react";


interface SearchProps {
  searchCountry: (data: string) => void
}



export const SearchElement: React.FC<SearchProps> = (props) => {

  function searchCountry(e: ChangeEvent<HTMLInputElement>){
    const value = e.target.value

    props.searchCountry(value)
  
  }

  return (
    <TextField 
    placeholder="Search a country"
    onChange={searchCountry}
    />
  )
}

export const Item: React.FC<ItemProps> = (props) => {

  const data = {
    code: props.iddRoot, 
    flags: props.flags, 
    numeCountry: props.nameCountry
  }


  return (
    <Style.ContainerItemFlag 
       itemState={props.state.numeCountry}
       itemCurent={props.nameCountry} 
       onClick={() => props.onHandlerItem(data)}
       >
      <Style.ImagesFlags src={`${props.flags}`} />
      <Style.CountryName>{props.nameCountry}</Style.CountryName>
      <Typography>{`(${props.iddRoot})`}</Typography>
    </Style.ContainerItemFlag>
  );
};


export const VContainer: React.FC<Props> = (props) => {
  return (
    <Style.CountryFlag>

      <SearchElement searchCountry={props.seachCountry}/>

      {props.countryName?.map((item) => {
        return <Item 
              state={props.stateCurent}
              onHandlerItem={props.onHandler} 
              {...item} 
              />;
      })}
    </Style.CountryFlag>
  );
};
