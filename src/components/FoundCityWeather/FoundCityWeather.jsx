const FoundCityWeather = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <p>Country:{weather.sys.country}</p>
      <p>City name: {weather.name}</p>
    </div>
  );
};

export default FoundCityWeather;
