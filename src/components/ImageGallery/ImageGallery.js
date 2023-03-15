import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import ImageGalleryItem from '../ImageGalleryItem';
import Button from 'components/Button';
import { getPhotos } from '../../services/api';
import { ImageGalleryList } from './ImageGallery.styled';
import Loader from '../Loader';
import { useState, useEffect } from 'react';

const ImageGallery = ({ queryProp }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageTag, setImageTag] = useState('');

  // async componentDidMount() {
  //   this.setState({ query: this.props.query });
  // }
  useEffect(() => {
    setQuery(queryProp);
    setPage(1);
    setImages([]);
    setTotalPages('');
    setImageTag('');
  }, [queryProp]);
  useEffect(() => {
    if (!query) {
      return;
    }
    const
  });

  // async componentDidUpdate(_, prevState) {
  //   const { query, page } = this.state;
  //   if (query !== prevState.query) {
  //     try {
  //       this.setState({ isLoading: true });
  //       const response = await getPhotos(query, page);
  //       const totalPages = Math.ceil(response.totalHits / 12);

  //       const imagesArray = response.hits;

  //       this.setState({
  //         images: imagesArray.map(
  //           ({ id, webformatURL, largeImageURL, tags }) => ({
  //             id,
  //             webformatURL,
  //             largeImageURL,
  //             imageTag: tags,
  //           })
  //         ),
  //         totalPages: totalPages,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       toast.error('Something went wrong!');
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }

  //     return;
  //   }

  //   if (prevState.page !== page) {
  //     try {
  //       this.setState({ isLoading: true });
  //       const response = await getPhotos(query, page);
  //       const newImagesArray = response.hits.map(
  //         ({ id, webformatURL, largeImageURL }) => ({
  //           id,
  //           webformatURL,
  //           largeImageURL,
  //         })
  //       );

  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...newImagesArray],
  //       }));
  //     } catch (error) {
  //       console.log(error);
  //       toast.error('Something went wrong!');
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //     return;
  //   }

  //   if (query !== this.props.query) {
  //     this.setState({
  //       query: this.props.query,
  //       page: 1,
  //       images: [],
  //       totalPages: null,
  //     });
  //     return;
  //   }

  //   if (prevState === this.state) {
  //     return;
  //   }

  //   if (prevState.page > 1) {
  //     const { height: cardHeight } = document
  //       .querySelector('ul')
  //       .firstElementChild.getBoundingClientRect();

  //     window.scrollBy({
  //       top: cardHeight * 2,
  //       behavior: 'smooth',
  //     });
  //   }

  //   return;
  // }

  const handleButtonClick = () => {
    if (totalPages === page) {
      toast.info('There is no more images');
      return;
    }
    setPage(state => state + 1);
  };

  const onImageClick = id => {
    this.props.onImageClick(
      images.find(image => image.id === +id).largeImageURL
    );
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
            alt={imageTag}
          />
        ))}
      </ImageGalleryList>
      {isLoading && <Loader />}
      {totalPages > 1 && <Button onClick={handleButtonClick} />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = { query: PropTypes.string.isRequired };
