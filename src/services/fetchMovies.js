import axios from 'axios';
import { API_KEY, BASE_URL, LANGUAGE } from '../constants/apiConstants';

const instance = axios.create({
  baseURL: BASE_URL,
  language: 'en-US',
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
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

export async function getMoviesByName(query) {
  const response = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return response.data.results;
}

export async function getMostPopularTvShows() {
  const response = await instance.get('/tv/top_rated');
  return response.data.results;
}

export async function getTvShowById(id) {
  const response = await instance.get(`/tv/${id}`);
  return response.data;
}
