import React from 'react'

interface TypeProps {
  children: any
}

const Auth: React.FC<TypeProps> = ({ children }) => {
  return (
    <main className="font-poppins flex flex-row w-full h-screen text-gray-600 dark:text-gray-100 bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center w-full h-full overflow-y-auto">
        {children}
      </div>
    </main>
  )
}

export default Auth
