import * as Style from "./Filter.style";
import { Container } from "@mui/system";
import { VButton, VFilterItem } from "../../components";
import { Props } from "./type";
import { Grid } from "@mui/material";

export const FilterView: React.FC<Props> = (props) => {
  return (
    <Container>
      <Style.H1>Catalog</Style.H1>

      <Style.ContainerDiv>
        <Style.FilterCategory>
          {props.filterCategory.map((item, i) => {
            return (
              <VButton
                key={i}
                onHandler={() => props.onHandlerFilter(item)}
                title={`${item}`}
                cssStyle={{
                  color: "black",
                  border: "black",
                  bg: "transparent",
                }}
              />
            );
          })}
        </Style.FilterCategory>

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
