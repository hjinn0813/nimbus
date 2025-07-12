// main page

import React, { useEffect, useState }  from 'react'
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';

export default function Main() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setCoords({ lat: latitude, lon: longitude })
      },
      (err) => {
        console.error(err)
        // 위치 권한 거부 시 기본값 서울
        setCoords({ lat: 37.5665, lon: 126.9780 })
      }
    )
  }, [])

  return (
    <>
      <SearchBar />
      {coords ? <WeatherCard coords={coords} /> : <p>Loading location...</p>}
    </>
  )
}
