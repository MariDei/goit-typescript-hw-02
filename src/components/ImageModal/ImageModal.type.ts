import { Image } from '../App/App.type';

export interface ImageModalProps {
  modalIsOpen: boolean;
  modalIsClose: () => void;
  image: Image;
}
