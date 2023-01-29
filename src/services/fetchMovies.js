import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/apiConstants';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export async function getMostPopularMovies() {
  const response = await instance.get(`/MostPopularMovies/`);
  return response.data.items;
}
