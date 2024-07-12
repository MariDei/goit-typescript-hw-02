import { useEffect, useState } from 'react';
import { getImagesApi } from '../../api/images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import './App.module.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(false);

  useEffect(() => {
    const searchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getImagesApi(query, page);
        setImages(prev => [...prev, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && searchImages();
  }, [page, query]);

  const handleSubmit = async searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleModalClick = image => {
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
}

export default App;
