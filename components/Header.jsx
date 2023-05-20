import React from 'react'
import { helpIcon, menuIcon, notificationIcon, payuxLogo, rappiLogo, settingsIcon } from '@/assets'
import Image from 'next/legacy/image'
import { Search } from '../components'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Link from 'next/link';

const Header = ({ theme, setTheme, toggle, setToggle }) => {
  return (
    <div className='md:px-6 px-4 py-4 flex dark:text-gray-100 text-gray-600'>
      <div className="md:w-[200px] md:flex-none flex justify-between items-center w-full">
        <Link href='/'>
          <Image
            src={payuxLogo}
            alt=''
            className='cursor-pointer'
          />
        </Link>
        <Image
          src={menuIcon}
          className='cursor-pointer'
          alt=''
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div className="hidden md:flex justify-between items-center pl-16 flex-1">
        <Search placeholder='Search...' />
        <div className="flex items-center justify-end gap-6 text-gray-600 font-medium text-sm">
          {theme === 'light' ? (
          <div 
            className="flex items-center py-1 px-2 bg-[#FFF6E9] rounded gap-2 cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            <BsFillMoonFill />
            <span className="">
              Dark Mode
            </span>
            </div>) : (
            <div
              className="flex items-center py-1 px-2 bg-[#FFF6E9] rounded gap-2 cursor-pointer"
              onClick={() => setTheme('light')}
            >
              <BsFillSunFill className='text-yellow-300' />
              <span className="">
                Light Mode
              </span>
            </div>)
          }
          <div className="flex items-center gap-4">
            <div className="flex items-center px-6 border-x gap-6">
              <div className="flex items-center gap-1 cursor-pointer dark:text-gray-100 text-gray-600">
                <Image 
                  src={helpIcon} 
                  alt=''
                />
                <span>
                  Help
                </span>
              </div>
              <Image
                src={notificationIcon}
                className='cursor-pointer'
                alt=''
              />
              <Image
                src={settingsIcon}
                className='cursor-pointer'
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src={rappiLogo}
                alt='logo'
              />
              <select 
                name="" 
                id="" 
                className="outline-none cursor-pointer bg-transparent dark:text-gray-100 text-gray-600"
              >
                <option 
                  value="" 
                  className="flex items-center gap-2"
                >
                  Rappi 
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header