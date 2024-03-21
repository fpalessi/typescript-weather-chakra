import axios from "axios";
import { useMemo, useState } from "react";
import { Forecast, Weather, WeatherSchema } from "../schemas";

const initialWeatherState: Weather = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [{ id: 0, main: "", description: "", icon: "" }],
  wind: {
    speed: 0,
    deg: 0,
  },
  name: "",
  visibility: 0,
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
  },
};

const initialForecastState: Forecast = {
  lat: 0,
  lon: 0,
  timezone: "",
  timezone_offset: 0,
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [{ id: 0, main: "", description: "", icon: "" }],
  },
  daily: [],
};

export default function useWeather() {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<Weather>(initialWeatherState);
  const [forecastWeatherData, setForecastWeatherData] =
    useState<Forecast>(initialForecastState);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setNotFound(false);
    try {
      const { data: weatherResult } = await axios(
        `${import.meta.env.VITE_WEATHER_BASE_URL}/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const result = WeatherSchema.safeParse(weatherResult);

      if (result.success) {
        setCurrentWeatherData(result.data);
      } else {
        console.log("Invalid weather data:", result.error);
      }

      const { lat, lon } = weatherResult.coord;
      const url = `${
        import.meta.env.VITE_WEATHER_BASE_URL
      }/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;

      const { data: forecastResult } = await axios.get(url);
      setForecastWeatherData(forecastResult);
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(
    () => currentWeatherData.name,
    [currentWeatherData]
  );

  return {
    currentWeatherData,
    forecastWeatherData,
    loading,
    notFound,
    fetchWeather,
    hasWeatherData,
  };
}
