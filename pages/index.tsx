import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Layout from '../layouts/default'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stuffs</title>
      </Head>
      <Layout>
        Main Body
      </Layout>
    </React.Fragment>
  )
}

export default Home
