import axios from 'axios';
import constants from '../constants/apiConstants';

const instance = axios.create({
  baseURL: constants.movieBaseUrl,
  language: 'uk',
  params: {
    api_key: constants.movieApiKey,
    language: constants.lang,
    page: 1,
  },
});

export async function getMostPopularMovies(pageNumber) {
  const params = { ...instance.defaults.params };
  params.page = pageNumber;

  const response = await instance.get(`/trending/movie/week`, { params });

  return response.data.results;
}

export async function getMovieDetailsById(id) {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
}

// export async function getMoviesByName(query) {
//   const response = await instance.get(`/search/movie`, {
//     params: {
//       query,
//     },
//   });
//   return response.data.results;
// }

export async function searchMoviesAndTVShows(query) {
  const response = await instance.get(`/search/multi`, {
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

export async function getMovieReviews(id) {
  const response = await instance.get(`/movie/${id}/reviews`);
  return response.data;
}

export async function getMovieCast(id) {
  const response = await instance.get(`/movie/${id}/credits`);
  return response.data;
}

export async function getTvShowReviews(id) {
  const response = await instance.get(`/tv/${id}/reviews`);
  return response.data;
}

export async function getTvShowCast(id) {
  const response = await instance.get(`/tv/${id}/credits`);
  return response.data;
}

export async function getActorId(query) {
  const response = await instance.get('/search/person', {
    params: {
      query,
    },
  });
  return response.data.results;
}

export async function getImages(movie_id) {
  const response = await instance.get(`/movie/${movie_id}/images`, {
    params: {
      movie_id,
      language: 'en',
    },
  });
  return response.data;
}
