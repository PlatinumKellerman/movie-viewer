import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/apiConstants';

const instance = axios.create({
  baseURL: BASE_URL,
  language: 'en-US',
  params: {
    api_key: API_KEY,
  },
});

export async function getMostPopularMovies() {
  const response = await instance.get(`/trending/movie/week`);
  return response.data.results;
}

export async function getMovieDetailsById(id) {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
}
