import styled from "styled-components";

export enum Center {
  center = "center",
  flexBetween = "space-between",
  start = "start",
}

export enum DirectionRow {
  row = "row",
  colunm = "column",
}

interface Type {
  justifyContent?: Center;
  alignItems?: string;
  gap?: string;
  flexDirection?: DirectionRow;
}

export const Flex = (props: Type) => `
  display: flex;
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
`;
