export type Slide = {
  id: string;
  title: string;
  description: string;
};

export type SlideItem = {
  id: string;
  title: string;
  description: string;
  currentIndex: number;
  totalSlides: number;
  skipStep?: () => void;
  nextStep?: () => void;
};
