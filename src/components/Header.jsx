// header

import React from 'react'
import { useState, useEffect } from 'react';
import DarkMode from './DarkMode';
import {formatCurrentTime} from '../utils/formatDate';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(formatCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatCurrentTime());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <header className='border-b-2 border-main_color shadow-xl flex flex-row items-center justify-between p-4'>
      <pre className='font-medium'>{currentTime}</pre>
      <div className='font-semibold text-2xl'>Nimbus</div>
      <DarkMode />
    </header>
  )
}
