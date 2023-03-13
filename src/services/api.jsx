import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32407272-8586469b42e966f16f1a46a56';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getPhotos = async (q, page) => {
  const config = {
    params: {
      key: KEY,
      image_type: 'photo',
      q,
      page,
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
    },
  };

  const response = await instance.get('/', config);
  return response.data;
};
