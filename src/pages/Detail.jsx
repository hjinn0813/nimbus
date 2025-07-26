// detail page

import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';

export default function Detail() {
  const {city} = useParams();

  return (
    <div className='flex flex-col mx-auto w-[90%]'>
      <h1 className="text-3xl font-bold mt-6">{city}</h1>

      {/* 현재 날씨 */}
      <WeatherCard city={city}/>

      {/* 5일 예보 - 이후 추가할 예정 */}
      {/* <ForecastSection city={city} /> */}
    </div>
  )
}
