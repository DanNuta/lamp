import * as Style from "./Filter.style";
import { Container } from "@mui/system";
import { VButton, VFilterItem, VFilterBtn } from "../../components";
import { Props } from "./type";
import { Grid } from "@mui/material";


export const FilterView: React.FC<Props> = (props) => {
  return (
    <Container>
      <Style.H1>Catalog</Style.H1>

      <Style.ContainerDiv>
        

        <VFilterBtn
         filterCategory={props.filterCategory}
         onHandlerFilter={props.onHandlerFilter}
         filterData={props.filter[0].filter}
         />

        <Grid container spacing={3}>
          {props.filter.map((item, i) => {
            return (
              <Grid item key={i} xs={12} sm={4} md={3}>
                <VFilterItem {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Style.ContainerDiv>
    </Container>
  );
};
