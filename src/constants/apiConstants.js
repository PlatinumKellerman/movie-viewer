const constants = {
  movieBaseUrl: 'https://api.themoviedb.org/3',
  lang: 'en',
  weatherBaseUrl: 'https://api.openweathermap.org/data/2.5/',
  movieApiKey: process.env.REACT_APP_MOVIE_API_KEY,
  weatherApiKey: process.env.REACT_APP_WEATHER_API_KEY,
};
console.log(constants.movieApiKey, constants.weatherApiKey);
export default constants;
