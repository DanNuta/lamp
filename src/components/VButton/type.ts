interface StyleCss{
    bg?: string,
    color?: string,
    border?: string
}

export interface Props  {
  onHaandler: () => void;
  title: string;
  cssStyle?: StyleCss
}


