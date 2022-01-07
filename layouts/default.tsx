import React from 'react'
import SideBar from '../components/SideBar'
import MenuBar from '../components/MenuBar'

interface TypeProps {
  children: any
}

const Layout: React.FC<TypeProps> = ({ children }) => {
  return (
    <main className="flex flex-row w-full h-screen">
      <SideBar />
      <div className="flex flex-col w-full max-w-full h-full overflow-y-auto">
        <MenuBar/>
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
