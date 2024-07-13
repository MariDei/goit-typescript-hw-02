import { useEffect, useState } from 'react';
import { getImagesApi } from '../../api/images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.type';
import './App.module.css';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const searchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const data: Image[] = await getImagesApi(query, page);
        setImages(prev => [...prev, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    query && searchImages();
  }, [page, query]);

  const handleSubmit = async (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleModalClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && (
        <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />
      )}

      <ImageGallery images={images} onImageModal={handleModalClick} />

      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          modalIsOpen={Boolean(selectedImage)}
          modalIsClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
