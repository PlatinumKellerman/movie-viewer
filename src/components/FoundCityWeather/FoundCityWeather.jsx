const FoundCityWeather = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <h1>City name: {weather.name}</h1>
    </div>
  );
};

export default FoundCityWeather;
