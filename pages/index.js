import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'
import { articles } from '../data'

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Dev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Welcome to HomePage!</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = () => {
  // const res = await fetch(`${server}/api/articles`)
  // const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }
