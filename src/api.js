import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID A3Ni88EQYaKxzpjrz_fysEatoS3gi9o8D49YCKDeCEw',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
