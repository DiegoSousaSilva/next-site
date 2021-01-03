import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Navigation from '@components/Navigation'

type PostList = string[]

export default function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Next Website</title>
      </Head>

      <main>
        <Navigation/>
        <Header/>
        {posts.length > 0 &&(
          <ul>
            {posts.map((slug)=>{
              <li key={slug}>
                {slug.replaceAll('-', ' ')}
              </li>
            })}
          </ul>
        )}
      </main>

      <Footer/>
    </>
  )
}

export const getStaticProps = async () => {
  const posts: PostList = getPostList()
return{
  props: {
    posts
  }
}
}
