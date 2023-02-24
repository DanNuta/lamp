import styled from "styled-components";

interface Props {
  index: number;
  i: number;
}

export const ImageSliderItem = styled.div`
  position: relative;
  height: 150px;
`;

export const ImagesContainer = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.index === props.i ? 2 : 1)};
`;

export const BackroundElement = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
