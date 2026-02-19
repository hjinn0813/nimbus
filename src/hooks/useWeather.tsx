// 현재날씨 리액트쿼리

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DEFAULT_LANG } from '../constants/default';

interface Coords {
  lat: number;
  lon: number;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
  rain?: { '1h'?: number };
  snow?: { '1h'?: number };
}

interface UseWeatherProps {
  coords?: Coords;
  city?: string;
}

export default function useWeather({ coords, city }: UseWeatherProps){
  const fetchWeather = async (): Promise<WeatherData> => {
    if (coords) {
      const { lat, lon } = coords;
      const res = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_KEY}&lang=${DEFAULT_LANG}`
      );
      return res.data;
    }

    if (city) {
      const res = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}&lang=${DEFAULT_LANG}`
      );
      return res.data;
    }

    throw new Error('No location provided');
  };

  return useQuery<WeatherData, Error>({
    queryKey: ['weather', city || coords],
    queryFn: fetchWeather,
    enabled: !!coords || !!city, // coords나 city 없으면 요청 안함
  });
}