import React from 'react'

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center w-full max-w-sm h-full space-y-10 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center justify-center w-full space-y-2">
        <h1 className="font-licorice font-black text-5xl">Stuffs</h1>
        <h6 className="font-light text-xs">I.T. Monthly Reports</h6>
      </div>
      <div className="flex flex-col w-full px-3 space-y-3">
        <div className="flex flex-col w-full space-y-1">
          <label className="font-light text-xs text-gray-700 dark:text-gray-200" htmlFor="txtyear">Select Year</label>
          <select className="cursor-pointer w-full px-3 py-2 bg-purple-200 dark:bg-gray-900 outline-none" name="txtyear" id="txtyear">
            <option value=""></option>
            <option value="2022">2022</option>
            <option value="2022">2023</option>
            <option value="2022">2024</option>
            <option value="2022">2025</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-1 text-gray-600 dark:text-purple-400">
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">JAN</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">FEB</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">MAR</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">APR</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">MAY</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">JUN</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">JUL</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">AUG</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">SEP</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">OCT</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">NOV</button>
          <button className="flex items-center justify-center w-full p-3 font-bold text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">DEC</button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <h6 className="font-light text-[10px]">&copy; 2022, All rights reserved. Stuffs by VEOSCRIPT.</h6>
      </div>
    </div>
  )
}

export default SideBar
