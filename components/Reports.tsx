import React from 'react'
import { RiPrinterFill, RiArrowDownSFill } from 'react-icons/ri'

const Reports = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-row items-center justify-between w-full px-3 py-2 border-b border-gray-200">
        <h3 className="font-bold text-sm">Reports List</h3>
        <span className="flex items-center space-x-2 text-purple-400">
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
      <div className="flex flex-row items-center justify-start w-full px-3 py-2 space-x-2 border-b border-gray-200 bg-purple-100">
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600">Requesting Person</h3>
          <RiArrowDownSFill className="w-3 h-3" />
        </span>
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600">Reported Issue</h3>
          <RiArrowDownSFill className="w-3 h-3" />
        </span>
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600">Resolution Made</h3>
          <RiArrowDownSFill className="w-3 h-3" />
        </span>
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600">Date Reported</h3>
          <RiArrowDownSFill className="w-3 h-3" />
        </span>
        <span className="flex items-center justify-start w-full max-w-sm space-x-1">
          <h3 className="font-normal text-xs text-gray-600">Date Resolved</h3>
          <RiArrowDownSFill className="w-3 h-3" />
        </span>
      </div>
      <div className="flex flex-col w-full h-full overflow-y-auto">
        {/* loop all reports here... */}
        <div className="flex flex-row items-center justify-start w-full px-3 py-2 space-x-2 border-b border-gray-200 transition ease-in-out duration-200 hover:bg-purple-100">
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-light text-xs">Jerome Joseph Villaruel</h3>
          </span>
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-light text-xs">Nagjakol ako ng hindi mo alam kaya tang ina mo</h3>
          </span>
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-light text-xs">Resolution Made</h3>
          </span>
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-light text-xs">Date Reported</h3>
          </span>
          <span className="flex items-center justify-start w-full max-w-sm space-x-1">
            <h3 className="font-light text-xs">Date Resolved</h3>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Reports
