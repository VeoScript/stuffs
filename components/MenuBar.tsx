import React from 'react'
import Link from 'next/link'
import { RiLayoutGridFill, RiQuillPenFill, RiAccountPinCircleFill, RiMoonFill, RiSunFill } from 'react-icons/ri'

const MenuBar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-3 py-1 border-b border-gray-200">
      <div className="flex items-center justify-start w-full space-x-2">
        <p className="font-light text-xs">Logged in as:</p>
        <p className="font-semibold text-sm">Unknown</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Link href="/">
          <a title="Home">
            <RiLayoutGridFill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-end w-full space-x-2">
        <Link href="/">
          <a title="Create Report">
            <RiQuillPenFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
          </a>
        </Link>
        <Link href="/">
          <a title="Administrator">
            <RiAccountPinCircleFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
          </a>
        </Link>
        <Link href="/">
          <a title="Dark Mode">
            <RiMoonFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MenuBar
