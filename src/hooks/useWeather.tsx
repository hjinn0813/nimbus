// 현재날씨 리액트쿼리

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DEFAULT_LANG } from '../constants/default';

interface Coords {
  lat: number;
  lon: number;
}

interface UseWeatherProps {
  coords?: Coords;
  city?: string;
}

export default function useWeather({ coords, city }: UseWeatherProps){
  const fetchWeather = async () => {
    if (coords) {
      const { lat, lon } = coords;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=${DEFAULT_LANG}`
      );
      return res;
    }

    if (city) {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=${DEFAULT_LANG}`
      );
      return res;
    }

    throw new Error('No location provided');
  };

  return useQuery({
    queryKey: ['weather', city || coords],
    queryFn: fetchWeather,
    enabled: !!coords || !!city, // coords나 city 없으면 요청 안함
  });
}