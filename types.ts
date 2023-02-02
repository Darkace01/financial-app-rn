export type Slide = {
  id: string;
  title: string;
  description: string;
};

export type SlideItem = {
  id: string;
  title: string;
  description: string;
  skipStep?: () => void;
  nextStep?: () => void;
};
