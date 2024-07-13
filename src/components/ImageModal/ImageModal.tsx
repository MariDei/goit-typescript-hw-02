import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.type';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'whitesmoke',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  modalIsClose,
  image,
}) => {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={modalIsClose}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        className={css.image}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <ul className={css.wrapper}>
        <li className={css.info}>
          Photographer: <span className={css.span}>{image.user.name}</span>{' '}
        </li>
        <li className={css.info}>
          Likes: <span className={css.span}>{image.likes}</span>{' '}
        </li>
      </ul>
    </Modal>
  );
};

export default ImageModal;
