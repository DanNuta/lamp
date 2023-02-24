export interface DotsType {
  onHandler: () => void;
  i: number;
  index: number;
}

export interface DotsRenderType {
  img: string[];
  onHandler: (data: number) => void;
  index: number;
}
