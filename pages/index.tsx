import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

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

      <footer className={styles.footer}>
        <a
          href="https://github.com/DiegoSousaSilva"
          target="_blank"
        >
          Powered by Diego dev
        </a>
      </footer>
    </>
  )
}
