import Head from 'next/head'
import Image from 'next/image'

const Hello = () =>{
  return(
    <>
      <Head>
        <title>Hello there :: My Blog</title>
        <meta property="og::title" content="first-post" />
      </Head>
        <article>
          <h1>Hello from the fist post</h1>
          <Image
            src="/post/first-post/luffy.jpg"
            height={427}
            width={640}
          />
          <p>Monkey D. Luffy</p>
        </article>
    </>
  )
}

export default Hello;