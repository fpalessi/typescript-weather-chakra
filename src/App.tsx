import DetailContainer from "./components/DetailContainer";
import Error from "./components/Error";
import ForecastDetail from "./components/ForecastDetail";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import WeatherDetail from "./components/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const {
    fetchWeather,
    loading,
    hasWeatherData,
    currentWeatherData,
    forecastWeatherData,
    notFound,
  } = useWeather();

  return (
    <>
      <Navbar fetchWeather={fetchWeather} />

      {notFound && <Error>You must type a valid city.</Error>}

      {loading && <Loader />}

      {hasWeatherData && (
        <DetailContainer>
          <WeatherDetail currentWeather={currentWeatherData} />
          <ForecastDetail forecastWeather={forecastWeatherData} />
        </DetailContainer>
      )}
    </>
  );
}

export default App;
