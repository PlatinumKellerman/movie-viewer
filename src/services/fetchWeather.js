import axios from 'axios';
import config from '../constants/apiConstants';

const instance = axios.create({
  baseURL: config.WEATHER_BASE_URL,
  params: {
    appid: config.WEATHER_API_KEY,
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
