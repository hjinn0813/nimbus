// 5일예보 리액트쿼리

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DEFAULT_LANG } from '../constants/default';

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
}

export default function useForecast(city: string){
  const fetchForecast = async (): Promise<{ list: ForecastItem[] }> => {
    if (!city) throw new Error('No city provided');

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=${DEFAULT_LANG}`
    );
    return res.data;
  };

  return useQuery({
    queryKey: ['forecast', city],
    queryFn: fetchForecast,
    enabled: !!city,
  });
}