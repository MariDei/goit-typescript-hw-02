import { ImageCardProps } from './ImageCard.type';
import css from './ImageCard.module.css';

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageModal }) => {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        width={370}
        height={270}
        onClick={() => onImageModal(image)}
      />
      <ul className={css.wrapper}>
        <li className={css.info}>
          Photographer: <span className={css.span}>{image.user.name}</span>{' '}
        </li>
        <li className={css.info}>
          Likes: <span className={css.span}>{image.likes}</span>{' '}
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
