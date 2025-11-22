// Footer

import React from 'react'
import { MdEmail } from "react-icons/md";
import { ImGithub } from "react-icons/im";

export default function Footer() {
  return (
    <footer id='footer' className='bg-gradient-to-b from-sub_color to-emerald-600 p-4'>
      <div id='ft-wrap' className='flex justify-between items-center'>
        <div id='ft-text' className='text-sm'>
          © 2025 Hyejin Cho.
          <br />
          All rights reserved.
        </div>
        <div id='ft-icons' className='flex flex-row gap-4'>
          <a href="mailto:hjc3790@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail size={22} />
          </a>
          <a href="https://github.com/hjinn0813" target="_blank" rel="noopener noreferrer">
            <ImGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}
