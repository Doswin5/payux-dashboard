import React from 'react'
import Image from 'next/legacy/image'
import { bankIcon, dateIcon, statusIcon, searchIcon } from "@/assets";
import { Search } from "@/components";

import { useSelector, useDispatch } from 'react-redux'
import { setToggleTab, setFilteredStatus, setSearchId } from '@/features/transactions';

const Filters = () => {

  const toggleTab = useSelector((state) => state.transactions.value.toggleTab)

  const filteredStatus = useSelector((state) => state.transactions.value.filteredStatus)
  
  const searchId = useSelector((state) => state.transactions.value.searchId)

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-6 dark:text-gray-100 text-gray-600">
      <div className={`flex justify-between md:justify-start w-full border-b border-[#E4E6E8] dark:border-[#E4E6E860] pb-2 gap-8 font-semibold`}>
        <span 
          className={`text-sm cursor-pointer ${toggleTab === 'all' && 'text-[#4A46FF] underline underline-offset-[10px] decoration-4 decoration-[#4A46FF]'}`}
          onClick={() => dispatch(setToggleTab('all'))}
        >
          All Payments
        </span>
        <span 
          className={`text-sm cursor-pointer ${toggleTab === 'succeeded' && 'text-[#4A46FF] underline underline-offset-[10px] decoration-4 decoration-[#4A46FF]'}`}
          onClick={() => dispatch(setToggleTab('succeeded'))}
        >
          Succeeded
        </span>
        <span 
          className={`text-sm cursor-pointer ${toggleTab === 'pending' && 'text-[#4A46FF] underline underline-offset-[10px] decoration-4 decoration-[#4A46FF]'}`}
          onClick={() => dispatch(setToggleTab('pending'))}
        >
          Pending
        </span>
        <span 
          className={`text-sm cursor-pointer ${toggleTab === 'declined' && 'text-[#4A46FF] underline underline-offset-[10px] decoration-4 decoration-[#4A46FF]'}`}
          onClick={() => dispatch(setToggleTab('declined'))}
        >
          Declined
        </span>
      </div>

      <div className={`md:flex hidden items-center ${toggleTab === 'all' ? 'justify-between' : 'justify-end'} w-full dark:text-gray-100 text-gray-600`}>
        <div className={`${toggleTab === 'all' ? 'flex' : 'hidden'} items-center gap-4 text-sm`}>
          <div className={`flex items-center p-2 rounded-lg border bg-white border-[#E4E6E80] dark:bg-transparent dark:border-[#E4E6E880] gap-2`}>
            <Image 
              src={dateIcon}
              alt='icon' 
            />
            <select
              name=""
              id=""
              className="outline-none cursor-pointer bg-transparent dark:text-gray-500 text-gray-600"
            >
              <option value="">Date range</option>
            </select>
          </div>
          <div className={`flex items-center p-2 rounded-lg border bg-white border-[#E4E6E80] dark:bg-transparent dark:border-[#E4E6E880] gap-2`}>
            <Image 
              src={statusIcon}
              alt='icon' 
            />
            <select
              name=""
              id=""
              className="outline-none cursor-pointer bg-transparent dark:text-gray-500 text-gray-600"
              value={filteredStatus}
              onChange={(e) => dispatch(setFilteredStatus(e.target.value))}
            >
              <option value="all">Status: All</option>
              <option value="succeeded">Succeeded</option>
              <option value="pending">Pending</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <div className={`flex items-center p-2 rounded-lg border bg-white border-[#E4E6E80] dark:bg-transparent dark:border-[#E4E6E880] gap-2`}>
            <Image src={bankIcon} alt='icon' />
            <select
              name=""
              id=""
              className="outline-none cursor-pointer bg-transparent dark:text-gray-500 text-gray-600"
            >
              <option value="">P. Method</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-[300px]">
          <Image
            src={searchIcon}
            className=''
            alt='icon'
          />
          <input
            value={searchId}
            type="text"
            className="text-base outline-none w-full font-normal placeholder:font-normal dark:text-gray-100 text-gray-600 bg-transparent"
            placeholder='Search Payment ID...'
            onChange={(e) => dispatch(setSearchId(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}

export default Filters