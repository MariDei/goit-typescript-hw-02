import axios, { AxiosResponse } from 'axios';

const ACCESS_KEY = `MgNqddEbH_y1KNzbeqRxTxaHsApjV2YACAqElrPD00w`;

axios.defaults.baseURL = 'https://api.unsplash.com';

export const getImagesApi = async (
  searchQuery: string,
  page: number
): Promise<string[]> => {
  const { data }: AxiosResponse = await axios.get('/search/photos', {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 9,
    },
  });
  return data.results;
};
