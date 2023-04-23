import axios from 'axios';
import constants from '../constants/apiConstants';

const instance = axios.create({
  baseURL: constants.weatherBaseUrl,
  params: {
    appid: constants.weatherApiKey,
    units: 'metric',
  },
});

export async function getWeatherByCityName(cityName) {
  const response = await instance.get(`weather`, {
    params: {
      q: cityName,
    },
  });
  return response.data;
}
