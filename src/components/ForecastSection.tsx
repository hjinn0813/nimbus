// 5일 예보

import React from 'react'
import useForecast from '../hooks/useForecast'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { format } from 'date-fns'

interface ForecastProps {
  city?: string
}

export default function ForecastSection({ city }: ForecastProps) {
  const { data, isLoading, error } = useForecast(city)

  if (isLoading){
    return (
      <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
        <Skeleton height={30} width={150} />
        <Skeleton height={80} width={80} circle />
        <Skeleton height={20} count={2} />
      </div>
    )
  }

  if (error) return <p>예보 불러오기 실패 🥲</p>
  if (!data) return null

  // list를 날짜별로 그룹화
  const forecastByDate: Record<string, typeof data.list> = {};
  data.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // "2025-11-22"처럼 날짜만
    if (!forecastByDate[date]) forecastByDate[date] = [];
    forecastByDate[date].push(item);
  });

  return (
    <div className="mt-10 w-[70%] p-4 rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-2xl mb-4">5일 예보</h2>

      {Object.entries(forecastByDate).map(([date, forecasts]) => (
        <div key={date} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            {format(new Date(date), 'yyyy-MM-dd (EEE)')}
          </h3>
          <div className="flex gap-4 overflow-x-auto">
            {forecasts.map(f => {
              const iconUrl = `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
              return (
                <div key={f.dt} className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-2 min-w-[80px]">
                  <span className="text-sm">{f.dt_txt.split(' ')[1].slice(0, 5)}</span>
                  <img src={iconUrl} alt={f.weather[0].description} className="w-12 h-12"/>
                  <span className="text-sm">{Math.round(f.main.temp - 273.15)}°C</span>
                  <span className="text-xs">{f.weather[0].description}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
