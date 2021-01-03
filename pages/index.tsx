import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Setup site next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
         <a href="#">Next Website </a>
        </h1>

    

       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/DiegoSousaSilva"
          target="_blank"
        >
          Powered by Diego dev
        </a>
      </footer>
    </div>
  )
}
