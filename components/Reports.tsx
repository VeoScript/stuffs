import React from 'react'
import { RiPrinterFill, RiEditLine, RiDeleteBin4Line } from 'react-icons/ri'

const Reports = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-row items-center justify-between w-full px-3 py-2 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-sm">Reports List</h3>
        <span className="flex items-center space-x-1 text-purple-400">
          <p className="font-bold text-base">JANUARY</p>
          <p className="font-bold text-base">2022</p>
        </span>
        <span className="flex items-center space-x-5">
          <span className="flex items-center space-x-2">
            <p className="font-light text-xs">All reports:</p>
            <p className="font-bold text-sm">100</p>
          </span>
          <button title="Print/Save">
            <RiPrinterFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
          </button>
        </span>
      </div>
      <div className="flex flex-row items-center justify-start w-full px-3 py-2 space-x-3 border-b border-gray-200 dark:border-gray-700 bg-purple-100 dark:bg-gray-900">
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600 dark:text-gray-300">Requesting Person</h3>
        </span>
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600 dark:text-gray-300">Reported Issue</h3>
        </span>
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600 dark:text-gray-300">Resolution Made</h3>
        </span>
        <span className="flex items-center justify-end w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600 dark:text-gray-300">Date Reported</h3>
        </span>
        <span className="flex items-center justify-end w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600 dark:text-gray-300">Date Resolved</h3>
        </span>
        <span className="flex items-center justify-end w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600 dark:text-gray-300">Actions</h3>
        </span>
      </div>
      <div className="flex flex-col w-full h-full overflow-y-auto">
        {/* loop all reports here... */}
        <div className="flex flex-row items-start justify-start w-full px-3 py-2 space-x-3 cursor-default border-b border-gray-200 dark:border-gray-700 transition ease-in-out duration-200 hover:bg-purple-100 hover:dark:bg-gray-700 hover:bg-opacity-50">
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-normal text-[11px]">Jerome Joseph Villaruel</h3>
          </span>
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-normal text-[11px]">Nagjakol ako ng hindi mo alam kaya tang ina mo</h3>
          </span>
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-normal text-[11px]">Kaigit kalima ug wala kabarog. kabarog kadiyot pero chamba rapud</h3>
          </span>
          <span className="flex items-center justify-end w-full max-w-sm space-x-1">
            <h3 className="font-normal text-[11px]">Date Reported</h3>
          </span>
          <span className="flex items-center justify-end w-full max-w-sm space-x-1">
            <h3 className="font-normal text-[11px]">Date Resolved</h3>
          </span>
          <span className="flex items-center justify-end w-full max-w-sm h-full space-x-2">
            <button type="button">
              <RiEditLine className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
            </button>
            <button type="button">
              <RiDeleteBin4Line className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Reports
