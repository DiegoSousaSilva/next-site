import Image from 'next/image'

const Hello = () =>{
  return (
      <article>
        <h1>Hello from the fist post</h1>
        <Image
          src="/post/first-post/luffy.jpg"
          height={427}
          width={640}
        />
        <p>Monkey D. Luffy</p>
      </article>
  )
}

export default Hello;