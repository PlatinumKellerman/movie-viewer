import Container from 'layout/common/Container/Container';
import {
  MainWrapper,
  WeatherIcon,
  WeatherInfoWrapper,
  WeatherIconWrapper,
  SecondaryWeatherInfoWrapper,
  SunriseIcon,
  CloudIcon,
  SunsetIcon,
  IconWrapper,
  HumidityIcon,
} from './FoundCityWeather.styled';

const FoundCityWeather = ({ weather }) => {
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
  const currentTemp = Math.round(weather.main.temp) + '°';
  const feelTemp = Math.round(weather.main.feels_like) + '°';

  console.log(weather);
  return (
    <Container>
      <MainWrapper>
        <WeatherIconWrapper>
          <WeatherIcon
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={'clear'}
            width="64px"
          ></WeatherIcon>
        </WeatherIconWrapper>
        <WeatherInfoWrapper>
          <p>{currentTime}</p>
          <p>
            {weather.name}, {weather.sys.country}
          </p>
          <p>
            {`${currentTemp}`}
            <span>{`(Feels like ${feelTemp}C)`}</span>
          </p>
          <p>{weather.weather[0].main}</p>
          <IconWrapper>
            <CloudIcon /> {`${weather.clouds.all}%`}
          </IconWrapper>
          <IconWrapper>
            <HumidityIcon /> {`${weather.main.humidity}%`}
          </IconWrapper>
          <IconWrapper>
            <SunriseIcon /> {sunriseTime}
          </IconWrapper>
          <IconWrapper>
            <SunsetIcon /> {sunsetTime}
          </IconWrapper>
        </WeatherInfoWrapper>
      </MainWrapper>
      <SecondaryWeatherInfoWrapper></SecondaryWeatherInfoWrapper>
    </Container>
  );
};

export default FoundCityWeather;
