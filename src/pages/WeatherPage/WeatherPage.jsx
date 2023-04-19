import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from '../../layout/common/Container/Container';
import Loader from '../../components/Loader';
import { getWeatherByCityName } from '../../services/fetchWeather';
import SearchCityWeatherForm from 'components/SearchCityWeatherForm';
import FoundCityWeather from 'components/FoundCityWeather';

const WeatherPage = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie-viewer';
  const [searchParams, setSearchParams] = useSearchParams();
  const cityName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (cityName === '' || cityName === null) return;
    async function getCityWeather() {
      try {
        const response = await getWeatherByCityName(cityName);
        setWeather(response);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    }
    if (cityName) {
      getCityWeather();
      setIsLoading(true);
    }
  }, [cityName]);

  const handleCityNameSubmit = cityName => {
    if (cityName) {
      setSearchParams(cityName);
    }
  };

  return (
    <Container>
      <Link to={backLinkHref}>
        {'<-'} {''} Go Back
      </Link>
      <SearchCityWeatherForm onSubmit={handleCityNameSubmit} />
      {isLoading && <Loader />}
      {weather && <FoundCityWeather weather={weather} location={location} />}
    </Container>
  );
};

export default WeatherPage;
