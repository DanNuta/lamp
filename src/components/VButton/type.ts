interface StyleCss {
  bg?: string;
  color?: string;
  border?: string;
}

export interface BtnProps {
  onHandler: () => void;
  title?: string;
  cssStyle?: StyleCss;
}

export interface LinkProps {
  href: string;
}
