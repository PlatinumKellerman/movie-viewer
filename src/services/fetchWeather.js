import axios from 'axios';
import constants from '../constants/apiConstants';

const instance = axios.create({
  baseURL: constants.WEATHER_BASE_URL,
  params: {
    appid: constants.WEATHER_API_KEY,
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
