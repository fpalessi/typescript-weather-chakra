import { z } from "zod";

export const WeatherSchema = z.object({
  coord: z.object({ lon: z.number(), lat: z.number() }),
  weather: z.array(
    z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
  }),
  name: z.string(),
  visibility: z.number(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    humidity: z.number(),
  }),
});

export const ForecastSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: z.object({
    dt: z.number(),
    sunrise: z.number(),
    sunset: z.number(),
    temp: z.number(),
    feels_like: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    dew_point: z.number(),
    uvi: z.number(),
    clouds: z.number(),
    visibility: z.number(),
    wind_speed: z.number(),
    wind_deg: z.number(),
    weather: z.array(
      z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
  daily: z.array(
    z.object({
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
      moonrise: z.number(),
      moonset: z.number(),
      moon_phase: z.number(),
      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      wind_gust: z.number().optional(),
      weather: z.array(
        z.object({
          id: z.number(),
          main: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
      clouds: z.number(),
      pop: z.number(),
      uvi: z.number(),
    })
  ),
});

export type Forecast = z.infer<typeof ForecastSchema>;
export type Weather = z.infer<typeof WeatherSchema>;
