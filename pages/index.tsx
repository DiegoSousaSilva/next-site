import Head from 'next/head'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Setup site next</title>
      </Head>

      <main>
        <Navigation/>
        <Header/>
      </main>

      <Footer/>
    </>
  )
}
