import React from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

interface FormData {
  username: string
  password: string
}

const LoginForm = () => {

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

  async function onLogin(formData: FormData) {
    const username = formData.username
    const password = formData.password

    // alert(username + password)

    Router.push('/')
  }

  return (
    <div className="flex flex-col items-center w-full max-w-sm space-y-5">
      <div className="flex flex-col items-center justify-center w-full space-y-2">
        <h1 className="font-licorice font-black text-5xl">Stuffs</h1>
        <h6 className="font-light text-xs">I.T. Monthly Reports</h6>
      </div>
      <div className="flex flex-col items-center justify-center w-full space-y-5">
        <form onSubmit={handleSubmit(onLogin)} className="flex flex-col w-full space-y-2">
          <div className="flex flex-col w-full space-y-1">
            <label className="ml-2 font-light text-xs text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
            <input 
              className="w-full outline-none px-5 py-3 rounded-lg text-lg bg-purple-200 dark:bg-gray-900" 
              type="text" 
              {...register("username", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="ml-2 font-light text-xs text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
            <input 
              className="w-full outline-none px-5 py-3 rounded-lg text-lg bg-purple-200 dark:bg-gray-900" 
              type="password" 
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex flex-col items-end w-full pt-1">
            <button type="submit" className="flex items-center justify-center w-full max-w-[7rem] p-3 rounded-lg font-light text-sm transition ease-in-out duration-200 bg-purple-200 hover:bg-purple-300 dark:bg-gray-900 hover:dark:bg-gray-700">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
