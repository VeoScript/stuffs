import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Auth from '../layouts/auth'
import LoginForm from '../components/AuthForms/LoginForm'

const Login: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stuffs | Login</title>
      </Head>
      <Auth>
        <LoginForm />
      </Auth>
    </React.Fragment>
  )
}

export default Login
