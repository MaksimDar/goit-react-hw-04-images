import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [largeImageURL, setLargeImage] = useState('');
  const [tags, setTags] = useState('');

  const onSubmit = newQuery => {
    setQuery(newQuery);
  };

  const handleImageClick = image => {
    setLargeImage(image);
  };

  const closeModal = () => {
    setLargeImage('');
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      {query && <ImageGallery queryProp={query} openImage={handleImageClick} />}
      {largeImageURL && (
        <Modal closeModal={closeModal}>
          <img src={largeImageURL} alt="XXX" />
        </Modal>
      )}

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
