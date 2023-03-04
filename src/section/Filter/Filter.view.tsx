import * as Style from "./Filter.style";
import { Container } from "@mui/system";
import { VButton, VFilterItem, VFilterBtn } from "../../components";
import { Props } from "./type";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export const FilterView: React.FC<Props> = (props) => {
  return (
    <Container>
      <Style.H1>Catalog</Style.H1>

      <Style.ContainerDiv>
        <VFilterBtn
          filterCategory={props.filterCategory}
          onHandlerFilter={props.onHandlerFilter}
          filterData={props.filter[0]?.filter}
        />

        <Grid layout component={motion.div} container spacing={3}>
          <AnimatePresence>
            {props.filter.map((item, i) => {
              return (
                <Grid
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  layout
                  component={motion.div}
                  item
                  key={i}
                  xs={12}
                  sm={4}
                  md={3}
                >
                  <VFilterItem {...item} />
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Style.ContainerDiv>
    </Container>
  );
};
