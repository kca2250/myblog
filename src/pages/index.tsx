import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>casebycase</title>
        <meta name='description' content='write by frone-end-enginner.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </>
  )
}

export default Home
