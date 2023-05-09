import ReactCountryFlag from 'react-country-flag';
import converter from 'degrees-to-compass';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
  ForecastList,
  ForecastWeatherIcon,
  ForecastItem,
  ForecastDate,
  ForecastText,
  ForecastStatus,
  ForecastTitle,
  ForecastCurrTemp,
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

  // Отримуємо поточну дату та додамо один день, щоб отримати дату завтрашнього дня
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const firstForecastOfDay = forecast.list.reduce((acc, forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    const time = forecast.dt_txt.split(' ')[1]; // Отримуємо час прогнозу
    const isTomorrowOrLater = new Date(forecast.dt_txt) >= tomorrow;
    if (isTomorrowOrLater && time === '12:00:00') {
      acc[date] = forecast;
    } else if (acc[date] === undefined && isTomorrowOrLater) {
      acc[date] = forecast;
    }
    return acc;
  }, {});
  const firstForecastArray = Object.values(firstForecastOfDay); // отримуємо масив з першим прогнозом кожного дня

  return (
    <MainWrapper>
      <WeatherInfoWrapper>
        <InfoWeatherValue>{currentTime}</InfoWeatherValue>
        <CityName>
          {weather.name}, {weather.sys.country}{' '}
          <ReactCountryFlag
            countryCode={weather.sys.country}
            style={{
              width: 'auto',
              height: '36px',
              borderRadius: '10px',
            }}
            title={weather.sys.country}
            svg
          />
        </CityName>
        <CurrentTemp>{currentTemp}</CurrentTemp>
        <FeelTemp>{`(Feels like ${feelTemp})`}</FeelTemp>
        <WeatherIconWrapper>
          <WeatherIcon
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png?size=400`}
            alt={weather.weather[0].description}
          ></WeatherIcon>
          <WeatherValue>{weather.weather[0].description}</WeatherValue>
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
        <ForecastTitle>Weather forecast for 5 days:</ForecastTitle>
        <ForecastList>
          {firstForecastArray.map(
            ({ clouds, dt, main, pop, rain, visibility, weather, wind }) => {
              const date = new Date(dt * 1000);
              const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              });
              const currentTemp = Math.round(main.temp);
              const feelTemp = Math.round(main.feels_like) + '°C';
              return (
                <ForecastItem key={dt}>
                  <ForecastDate>{formattedDate}</ForecastDate>
                  <ForecastWeatherIcon
                    src={`http://openweathermap.org/img/w/${weather[0].icon}.png?size=400`}
                    alt={weather[0].main}
                  ></ForecastWeatherIcon>
                  <ForecastText>
                    Status:{' '}
                    <ForecastStatus>{weather[0].description}</ForecastStatus>
                  </ForecastText>
                  <ForecastText>
                    Temperature:{' '}
                    <ForecastCurrTemp>{currentTemp}</ForecastCurrTemp>
                  </ForecastText>
                  <ForecastText>
                    Feels like: <ForecastStatus>{feelTemp}</ForecastStatus>
                  </ForecastText>
                  <ForecastText>
                    Precip. prob.:{' '}
                    <ForecastStatus>{Math.round(pop * 100)}%</ForecastStatus>
                  </ForecastText>
                  {rain && (
                    <ForecastText>
                      Rain: <ForecastStatus>{rain['3h']}mm</ForecastStatus>
                    </ForecastText>
                  )}
                  <ForecastText>
                    Clouds: <ForecastStatus>{clouds.all}%</ForecastStatus>
                  </ForecastText>
                  <ForecastText>
                    Pressure:{' '}
                    <ForecastStatus>{main.pressure}hPa</ForecastStatus>
                  </ForecastText>
                  <ForecastText>
                    Humidity: <ForecastStatus>{main.humidity}%</ForecastStatus>
                  </ForecastText>
                  <ForecastText>
                    Visibility:{' '}
                    <ForecastStatus>
                      {Math.round(visibility / 1000)}km
                    </ForecastStatus>
                  </ForecastText>
                  <ForecastText>
                    Wind:{' '}
                    <ForecastStatus>
                      {Math.round(wind.speed)}m/s {converter.convert(wind.deg)}
                    </ForecastStatus>
                  </ForecastText>
                </ForecastItem>
              );
            }
          )}
        </ForecastList>
        <MapContainer
          key={`${weather.coord.lat}-${weather.coord.lon}`}
          center={[weather.coord.lat, weather.coord.lon]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '350px' }}
        >
          {/* MAPBOX TileLayer */}
          {/* <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            attribution="<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox</a> <a href='http://openstreetmap.org/about/' target='_blank'>&copy; OpenStreetMap</a> <a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>"
            accessToken="pk.eyJ1IjoicGxhdGludW0wMDEiLCJhIjoiY2xoZXU3a2NjMTBtZzNrcDRvM3prZXJlZSJ9.dzTBZ5lMEfVLKUa96H7ifg"
            id="mapbox/streets-v11"
          /> */}

          {/* openstreetmap  TileLayer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          <Marker position={[weather.coord.lat, weather.coord.lon]}>
            <Popup>
              {weather.name}, {weather.sys.country}
            </Popup>
          </Marker>
        </MapContainer>
      </ForecastWeatherWrapper>
    </MainWrapper>
  );
};

export default FoundCityWeather;
