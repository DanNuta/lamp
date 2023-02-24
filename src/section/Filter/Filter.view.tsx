import * as Style from "./Filter.style";
import { Container } from "@mui/system";
import { VButton } from "../../components";
import { Props } from "./type";

export const FilterView: React.FC<Props> = (props) => {


  return (
    <Container>
      <Style.H1>Catalog</Style.H1>

      <Style.ContainerDiv>
        {props.filterCategory.map((item, i) => {
          return (
            <VButton key={i} onHaandler={() => props.onHandlerFilter(item)} title={`${item}`}/>
          )
        })}


        {props.filter.map(item => {
          return (
            <div>
              <h1>{item.price}</h1>
              
              <div>
                {item.img.map(item => {
                  return (
                    <img src={item}></img>
                  )
                })}
              </div>
              
            </div>
          )
        })}
      </Style.ContainerDiv>
    </Container>
  )
};
