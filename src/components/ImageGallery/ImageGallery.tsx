import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../App/App.type';
import css from './ImageGallery.module.css';

interface Props {
  images: Image[];
  onImageModal: (image: Image) => void;
}

function ImageGallery({ images, onImageModal }: Props) {
  return (
    <ul className={css.container}>
      {images.map((image: Image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageModal={onImageModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
