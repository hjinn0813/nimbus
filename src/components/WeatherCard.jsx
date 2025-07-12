// weather card

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function WeatherCard({city, coords}) {
  const fetchWeather = async() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);

    // 현재 위치 기반
    if (coords) {
      const { lat, lon } = coords
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    }

    // 검색한 도시 기반
    if (city) {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
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

  const weather = data.data

  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>{Math.round(weather.main.temp - 273.15)}°C</p>
    </div>
  )
}