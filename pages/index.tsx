import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Layout from '../layouts/default'
import Reports from '../components/Reports'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stuffs</title>
      </Head>
      <Layout>
        <Reports />
      </Layout>
    </React.Fragment>
  )
}

export default Home
