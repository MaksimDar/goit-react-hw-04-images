import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from 'components/Button';
import { getPhotos } from '../../services/api';
import { ImageGalleryList } from './ImageGallery.styled';
import Loader from '../Loader';
import { useState, useEffect, useRef } from 'react';

const ImageGallery = ({ queryProp, openModal }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useRef(false);
  useEffect(() => {
    setQuery(queryProp);
    setPage(1);
    setImages([]);
    setTotalPages('');
  }, [queryProp]);
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getPhotos(query, page);
        const totalPages = Math.ceil(response.totalHits / 12);
        const imagesArray = response.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            imageTag: tags,
          })
        );
        setImages(prevState => [...prevState, imagesArray]);
        setTotalPages(totalPages);
      } catch {
        toast.error('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);
  useEffect(() => {
    if (page > 1 && loadMore.current) {
      const { height: cardHeight } = document
        .querySelector('ul')
        .firstElementChild.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  });
  const handleButtonClick = () => {
    if (totalPages === page) {
      toast.info('There is no more images');
      return;
    }
    setPage(state => state + 1);
    loadMore.current = true;
  };

  const onImageClick = id => {
    const { largeImageURL, imageTag } = images.find(image => image.id === +id);
    openModal(largeImageURL, imageTag);
    loadMore.current = false;
  };
  return (
    <>
      <ImageGalleryList>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image.webformatURL}
            id={image.id}
            onImageClick={id => {
              onImageClick(id);
            }}
            alt={image.imageTag}
          />
        ))}
      </ImageGalleryList>
      {isLoading && <Loader />}
      {totalPages > 1 && <Button onClick={handleButtonClick} />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = { queryProp: PropTypes.string };
