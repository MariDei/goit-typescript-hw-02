import { Image } from '../App/App.type';

export type ImageCardProps = {
  image: Image;
  onImageModal: (image: Image) => void;
};
