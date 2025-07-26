// main page

import React, { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_COORDS } from '../constants/default';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';

export default function Main() {
  const [coords, setCoords] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setCoords({ lat: latitude, lon: longitude })
      },
      (err) => {
        console.error(err)
        // 위치 권한 거부 시 기본값 서울
        setCoords({ DEFAULT_COORDS })
      }
    )
  }, [])

  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <div className='font-semibold text-4xl mb-10'>Nimbus</div>
      <SearchBar />
      {coords 
        ? <WeatherCard coords={coords} 
            onClick={(cityName)=> navigate(`detail/${encodeURIComponent(cityName)}`)}
          />
        : <p>Loading location...</p>}
    </div>
  )
}
