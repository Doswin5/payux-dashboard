import React, { useState } from 'react'
import Image from "next/legacy/image";
import { addIcon, downloadIcon } from "@/assets";
import { Filters, Transactions } from "@/components";

const Payments = () => {

  const [toggleTab, setToggleTab] = useState('all')

  return (
    <div>
      <div className="flex items-center justify-between mb-10 dark:text-gray-100 text-gray-600">
        <h1 className="text-2xl font-medium">
          Payments Overview
        </h1>
        <div className="hidden md:flex items-center gap-6">
          <button className={`flex gap-2 items-center dark:text-gray-100 text-gray-600 bg-white dark:bg-[#1C1C1C] dark:border-none font-medium text-sm border rounded-lg p-2`}>
            <Image
              src={downloadIcon}
            />
            Export
          </button>
          <button className="flex gap-2 items-center text-white bg-[#4A46FF] font-medium text-sm rounded-lg p-2 pr-4">
            <Image
              src={addIcon}
            />
            Payment Link
          </button>
        </div>
      </div>

      <Filters />

      <Transactions />
    </div>
  )
}

export default Payments