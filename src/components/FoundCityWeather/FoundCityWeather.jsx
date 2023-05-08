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
  WindIcon,
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
  const windSpeed = Math.round(weather.wind.speed);
  const converter = require('degrees-to-compass');

  // Отримуємо поточну дату та додамо один день, щоб отримати дату завтрашнього дня
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const firstForecastOfDay = forecast.list
    .filter(forecast => {
      // Повертаємо прогнози з датою, яка є пізнішою за завтрашню
      const date = new Date(forecast.dt_txt);
      return date >= tomorrow;
    })
    .reduce((acc, forecast) => {
      const date = forecast.dt_txt.split(' ')[0]; // отримуємо дату прогнозу
      if (acc[date] === undefined) {
        // якщо дата ще не зустрічалася
        acc[date] = forecast; // додаємо прогноз до об'єкту з першим прогнозом кожного дня
      }
      return acc;
    }, {});
  const firstForecastArray = Object.values(firstForecastOfDay); // отримуємо масив з першим прогнозом кожного дня

  console.log(firstForecastArray);
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
          <WindIcon />{' '}
          <InfoWeatherValue>
            {`${windSpeed} m/s`} <br />
            {converter.convert(weather.wind.deg)}
          </InfoWeatherValue>
        </IconWrapper>
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
      <ForecastWeatherWrapper>
        <ul>
          {firstForecastArray.map(
            ({
              clouds,
              dt,
              dt_txt,
              main,
              pop,
              rain,
              visibility,
              weather,
              wind,
            }) => {
              const date = new Date(dt * 1000);
              const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              });
              const currentTemp = Math.round(main.temp) + '°C';
              const feelTemp = Math.round(main.feels_like) + '°C';
              return (
                <li key={dt}>
                  <div>
                    <p>{formattedDate}</p>
                    <img
                      src={`http://openweathermap.org/img/w/${weather[0].icon}.png?size=400`}
                      alt={weather[0].main}
                    ></img>
                    <p>Status: {weather[0].description}</p>
                    <p>Temperature: {currentTemp}</p>
                    <p>Feels like: {feelTemp}</p>
                    {rain && <p>Rain: {rain['3h']} mm</p>}
                    {clouds ? (
                      <p>Clouds: {clouds.all} %</p>
                    ) : (
                      <p>Clouds: no info</p>
                    )}
                    <p>Pressure: {main.pressure} hPa</p>
                    <p>Humidity: {main.humidity} %</p>
                    <p>Precipitation probability: {Math.round(pop * 100)} %</p>
                    <p>Visibility: {Math.round(visibility / 1000)} km</p>
                    <p>Wind speed: {Math.round(wind.speed)} m/s</p>
                    <p>Wind direction: {converter.convert(wind.deg)}</p>
                    <p></p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </ForecastWeatherWrapper>
    </MainWrapper>
  );
};

export default FoundCityWeather;
