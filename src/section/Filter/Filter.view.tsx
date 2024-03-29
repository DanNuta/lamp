import * as Style from "./Filter.style";
import { VFilterItem, VFilterBtn } from "../../components";
import { Props } from "./type";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { TitleSection } from "../../Css/ElementSame";

import React, { useContext } from "react";
import { TranslatorContext } from "../../Context/Translator.context";
import { Props as PropsFilterContext } from "../../Context/type";

interface FilterProps {
  title: string;
  section: string;
}

export const FilterView: React.FC<Props> = (props) => {
  const { translator } = useContext(TranslatorContext) as PropsFilterContext;

  const translatorFilter: FilterProps = {
    title: translator.catalog.title,
    section: translator.sections.catalog,
  };

  return (
    <Style.ContanerTop>
      <Style.ContainerStyle id={`${translatorFilter.section}`}>
        <TitleSection>{translatorFilter.title}</TitleSection>

        <Style.ContainerParent>
          <VFilterBtn
            filterCategory={props.filterCategory}
            onHandlerFilter={props.onHandlerFilter}
            filterData={props.filter?.[0]}
          />

          <Grid layout component={motion.div} container spacing={3}>
            <AnimatePresence>
              {props.filter?.map((item, i) => {
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
                    md={4}
                  >
                    <VFilterItem {...item} />
                  </Grid>
                );
              })}
            </AnimatePresence>
          </Grid>
        </Style.ContainerParent>
      </Style.ContainerStyle>
    </Style.ContanerTop>
  );
};
