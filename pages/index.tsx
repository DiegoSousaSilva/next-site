import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    < >
      <Head>
        <title>Setup site next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
      </main>
      
      <Footer/>
    </>
  )
}
