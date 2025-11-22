// 404 not found page

import React from 'react'
import { Link } from 'react-router-dom';
import cryingFace from '../assets/crying-face.png';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center'>
      <img src={cryingFace} alt="cry" className='w-11 h-11 mb-5' />
      <div className='flex flex-col items-center text-center text-xl leading-8'>
        여기는 날씨 정보가 없는 곳이에요! 
        <br />
        주소를 다시 확인해주세요.
      </div>
      <Link to="/" className='mt-7 font-semibold py-3 px-4 rounded-md dark:bg-main_color border border-main_color'>메인으로</Link>
    </div>
  )
}
