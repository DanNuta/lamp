export interface dataProps {
  img: string;
  i: number;
}

export interface GaleryType {
  onShowImage: (img: string, i: number) => void;
  data: dataProps;
  closeShowItem: (e: any) => void;
  nextBtn: () => void;
  prevBtn: () => void;
  images: string[];
  showMoreItems(): void;
}
