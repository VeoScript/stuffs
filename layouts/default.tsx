import React from 'react'
import SideBar from '../components/SideBar'
import MenuBar from '../components/MenuBar'

interface TypeProps {
  children: any
}

const Layout: React.FC<TypeProps> = ({ children }) => {
  return (
    <main className="font-poppins flex flex-row w-full h-screen text-gray-600 dark:text-gray-100">
      <SideBar />
      <div className="flex flex-col w-full max-w-full h-full overflow-hidden">
        <MenuBar/>
        <div className="flex flex-col w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
