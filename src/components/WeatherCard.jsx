// weather card

import React from 'react'
import { DEFAULT_LANG } from '../constants/default'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function WeatherCard({ city, coords, onClick }) {
  const fetchWeather = async() => {
    // 현재 위치 기반
    if (coords) {
      const { lat, lon } = coords
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=${DEFAULT_LANG}`)
      return res;
    }

    // 검색한 도시 기반
    if (city) {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=${DEFAULT_LANG}`)
      return res;
    }

    throw new Error('No location provided')
  }

  const {data, isLoading, error} = useQuery({
    queryKey: ['weather', city || coords],
    queryFn: () => fetchWeather(city || coords),
  })

  if (isLoading){
    return (
      <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
        <Skeleton height={30} width={150} />
        <Skeleton height={80} width={80} circle />
        <Skeleton height={20} count={2} />
      </div>
    )
  }

  if (error) return <p>에러 발생 🥲</p>

  // 아이콘 추출
  const weather = data.data;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="flex flex-col mt-10 w-[80%] px-5 py-6 rounded-lg shadow bg-white dark:bg-gray-800 cursor-pointer"
      onClick={() => onClick?.(weather.name)}>
      <div className='text-xl'>{weather.name}</div>
      <div className='flex flex-row items-end justify-between'>
        <div className='my-6'>
          <div className='text-2xl'>{weather.weather[0].description}</div>
          <div className='text-6xl mt-2'>{Math.round(weather.main.temp - 273.15)}°C</div>
        </div>
        <img className='w-[150px] h-[150px]' src={iconUrl} alt={weather.weather[0].description} />
      </div>
    </div>
  )
}