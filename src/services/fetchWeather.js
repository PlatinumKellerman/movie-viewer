import axios from 'axios';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from '../constants/apiConstants';

const instance = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    appid: WEATHER_API_KEY,
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
