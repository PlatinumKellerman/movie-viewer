import {
  MainWrapper,
  WeatherIcon,
  WeatherInfoWrapper,
  WeatherIconWrapper,
  ForecastWeatherWrapper,
  SunriseIcon,
  CloudIcon,
  SunsetIcon,
  IconWrapper,
  HumidityIcon,
  InfoWeatherValue,
  CityName,
  CurrentTemp,
  FeelTemp,
  WeatherValue,
} from './FoundCityWeather.styled';

const FoundCityWeather = ({ weather, forecast }) => {
  const currentTime = new Date(weather.dt * 1000).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleString(
    'en-US',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }
  );
  const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleString(
    'en-US',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }
  );
  const currentTemp = Math.round(weather.main.temp) + '°C';
  const feelTemp = Math.round(weather.main.feels_like) + '°C';

  console.log(weather);
  console.log(forecast);
  return (
    <MainWrapper>
      <WeatherInfoWrapper>
        <InfoWeatherValue>{currentTime}</InfoWeatherValue>
        <CityName>
          {weather.name}, {weather.sys.country}
        </CityName>
        <CurrentTemp>{currentTemp}</CurrentTemp>
        <FeelTemp>{`(Feels like ${feelTemp})`}</FeelTemp>
        <WeatherIconWrapper>
          <WeatherIcon
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png?size=400`}
            alt={weather.weather[0].main}
          ></WeatherIcon>
          <WeatherValue>{weather.weather[0].main}</WeatherValue>
        </WeatherIconWrapper>
        <IconWrapper>
          <CloudIcon />{' '}
          <InfoWeatherValue>{`${weather.clouds.all}%`}</InfoWeatherValue>
        </IconWrapper>
        <IconWrapper>
          <HumidityIcon />{' '}
          <InfoWeatherValue>{`${weather.main.humidity}%`}</InfoWeatherValue>
        </IconWrapper>
        <IconWrapper>
          <SunriseIcon /> <InfoWeatherValue>{sunriseTime}</InfoWeatherValue>
        </IconWrapper>
        <IconWrapper>
          <SunsetIcon /> <InfoWeatherValue>{sunsetTime}</InfoWeatherValue>
        </IconWrapper>
      </WeatherInfoWrapper>
      <ForecastWeatherWrapper></ForecastWeatherWrapper>
    </MainWrapper>
  );
};

export default FoundCityWeather;
