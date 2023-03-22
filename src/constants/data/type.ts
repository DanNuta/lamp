interface BackendCategory {
  id: string;
  category: string;
}

export interface PropsFilter extends BackendCategory {
  price: number;
  img: string;
  title: string;
}

export interface testimonial {
  id: number;
  testimonial: string;
}
