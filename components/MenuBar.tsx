import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { RiLayoutGridFill, RiQuillPenFill, RiAccountPinCircleFill, RiMoonFill, RiSunFill, RiLogoutBoxRFill } from 'react-icons/ri'

const MenuBar = () => {

  const {theme, setTheme} = useTheme()

  return (
    <div className="flex flex-row items-center justify-between w-full px-3 py-1 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-start w-full space-x-2">
        <p className="font-light text-[10px]">Logged in as:</p>
        <p className="font-semibold text-xs">Unknown</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Link href="/">
          <a title="Home">
            <RiLayoutGridFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
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
        {theme !== undefined && (
          <button
            title="Theme Toggle"
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
          >
            {theme === 'dark'
              ? <RiSunFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
              : <RiMoonFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
            }
          </button>
        )}
        <button
          title="Logout"
          onClick={() => {
            Router.push('/login')
          }}
        >
          <RiLogoutBoxRFill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95 text-gray-600 dark:text-gray-100" />
        </button>
      </div>
    </div>
  )
}

export default MenuBar
