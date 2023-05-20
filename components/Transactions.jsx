import React from 'react'
import Image from 'next/legacy/image'
import { useState, useEffect } from 'react';
import { checkbox, darkCheckbox, dropdown } from '@/assets'
import { useTheme } from 'next-themes'
// import { transactions } from '@/constants'

import { useSelector, useDispatch } from 'react-redux'

const Transactions = () => {

  const toggleTab = useSelector((state) => state.transactions.value.toggleTab)

  const filteredStatus = useSelector((state) => state.transactions.value.filteredStatus)

  const transactions = useSelector((state) => state.transactions.value.transactions)

  const searchId = useSelector((state) => state.transactions.value.searchId)

  const { theme } = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page
  

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let results
  let transactionsDisplayed

  if (toggleTab === 'all') {
    if (filteredStatus === 'all') {
      transactionsDisplayed = transactions
      results = transactionsDisplayed.length
    } else if (filteredStatus === 'succeeded') {
      transactionsDisplayed = transactions.filter(transaction => transaction.status === 'succeeded')
      results = transactionsDisplayed.length
    } else if (filteredStatus === 'pending') {
      transactionsDisplayed = transactions.filter(transaction => transaction.status === 'pending')
      results = transactionsDisplayed.length
    } else if (filteredStatus === 'declined') {
      transactionsDisplayed = transactions.filter(transaction => transaction.status === 'declined')
      results = transactionsDisplayed.length
    }
  } else if (toggleTab === 'succeeded') {
    transactionsDisplayed = transactions.filter(transaction => transaction.status === 'succeeded')
    results = transactionsDisplayed.length
  } else if (toggleTab === 'pending') {
    transactionsDisplayed = transactions.filter(transaction => transaction.status === 'pending')
    results = transactionsDisplayed.length
  } else if (toggleTab === 'declined') {
    transactionsDisplayed = transactions.filter(transaction => transaction.status === 'declined')
    results = transactionsDisplayed.length
  }

  if (searchId) {
    transactionsDisplayed = transactionsDisplayed.filter(transaction => transaction.paymentId.toLowerCase().includes(searchId.toLowerCase()))
    results = transactionsDisplayed.length
    // if (transactionsDisplayed.length > 0) {
    //   transactionsDisplayed = transactionsDisplayed
    // } else {
    //   transactionsDisplayed = []
    // }
  }

  let currentPageData
  // Slice the data array based on the current page
  
  if (transactionsDisplayed.length > 0) {
    currentPageData = transactionsDisplayed.slice(startIndex, endIndex);
  } else {
    return (
      <div className='flex flex-col items-center justify-center w-full h-[300px] dark:text-gray-100 text-gray-600'>
        There is no transaction.
      </div>
    )
  }
  
  const totalPages = Math.ceil(transactionsDisplayed.length / itemsPerPage);

  // Handle pagination controls
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (currentPage > totalPages) {
    setCurrentPage(1)
  }
  

  return (
    <>
      <div className="md:mt-6 md:text-sm text-[8px] dark:text-gray-100 text-gray-600 w-full h-[40vh] scrollbar-hide  overflow-y-scroll">
        <table className='w-full'>
          <thead className='font-semibold mb-4'>
            <tr className={`border-y border-[#E4E6E8] dark:border-[#E4E6E880]`}>
              <td className='py-4'>
                <Image 
                  src={theme === 'light' ? checkbox : darkCheckbox} className='cursor-pointer' 
                  alt=''
                />
              </td>
              <td className='py-4'>PAYMENT ID</td>
              <td className='py-4'>STATUS</td>
              <td className='py-4'>AMOUNT</td>
              <td className='py-4'>P. METHOD</td>
              <td className='py-4'>CREATION DATE</td>
            </tr>
          </thead>
          <tbody>
            {
              currentPageData.map(transaction => (
                <tr className={`md:relative border-b border-[#E4E6E8] dark:border-[#E4E6E880]`} key={transaction.id}>
                  <td className='py-4'>
                    <Image
                      src={theme === 'light' ? checkbox : darkCheckbox} className='cursor-pointer'
                      alt=''
                    />
                  </td>
                  <td className='py-4'>{transaction.paymentId}</td>
                  <td className='py-4'>
                    <Image
                      src={transaction.statusImage} className='cursor-pointer'
                      alt=''
                      // width={70}
                      // height={24}
                    />
                  </td>
                  <td className='py-4'><span className="font-medium">{transaction.amount}</span> USD</td>
                  <td className='py-4'>
                    <Image
                      src={transaction.paymentMethod} 
                      alt=''
                      className='cursor-pointer'
                      // width={70}
                      // height={16}
                    />
                  </td>
                  <td className='py-4'>{transaction.creationDate}</td>
                  <div className="invisible md:visible absolute right-0 top-1/2 -translate-y-1/2">
                    <Image src={dropdown} alt='' className='' />
                  </div>
                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-10">
        <span className="text-sm"><span className="font-semibold">
          {currentPageData.length > 0 ? currentPageData.length : 0}
        </span> {currentPageData.length > 1 ? 'results' : 'result'}</span>
        <div className="flex items-center gap-4">
          <button 
            className={`flex gap-2 items-center dark:text-gray-100 text-gray-600 bg-white dark:bg-[#1C1C1C] dark:border-none font-medium text-sm border rounded-lg p-2`} 
            onClick={goToPreviousPage} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <button 
            className={`flex gap-2 items-center text-gray-600 dark:text-gray-100 bg-white dark:bg-[#1C1C1C] dark:border-none font-medium text-sm border rounded-lg p-2`} 
            onClick={goToNextPage}
            disabled={endIndex >= transactionsDisplayed.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Transactions