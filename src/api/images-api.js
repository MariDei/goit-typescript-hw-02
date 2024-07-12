import axios from 'axios';

const ACCESS_KEY = `XwurAsxbIvpFOqYLfiOPooi-NtzQ2JO4IEDnUVnWzEE`;

axios.defaults.baseURL = 'https://api.unsplash.com';

export const getImagesApi = async (searchQuery, page) => {
  const { data } = await axios.get('/search/photos', {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 9,
    },
  });
  return data.results;
};
