// Dark mode btn

import React from 'react'
import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false); // 초기값: 라이트모드

  // 로컬스토리지에서 설정값 불러오기
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') setIsDark(true);
  }, []);

  // 다크모드 설정하기
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(prev => !prev)}
      className="p-2 rounded-full transition-colors duration-300 bg-gray-800 dark:bg-slate-100 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDark ? <FiSun className="text-orange-600" /> : <FiMoon className="text-yellow-500" />}
    </button>
  )
}
