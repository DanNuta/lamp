import styled from "styled-components";

interface Props {
  index: number;
  i: number;
}

export const Button = styled.button<Props>`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.index === props.i ? "rgba(255, 255, 255, 0.7)" : "white"};
  cursor: pointer;
  border: none;
`;

export const RenderDots = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
