import React from 'react'
import { searchIcon } from '@/assets'
import Image from 'next/legacy/image'
import { useDispatch, useSelector } from 'react-redux'

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2 w-[300px]">
      <Image
        src={searchIcon}
        className=''
        alt=''
      />
      <input
        type="text"
        className="text-base outline-none w-full font-normal placeholder:font-normal dark:text-gray-100 text-gray-600 bg-transparent"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search