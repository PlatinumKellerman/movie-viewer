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

export async function getMovieDetailsById() {
  const response = await instance.get(`/movie/{movie_id}`);
  return response.data.results;
}
