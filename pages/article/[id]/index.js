import { useRouter } from "next/router"
import { server } from "../../../config"
import Link from 'next/link'
import styles from '../../../styles/Article.module.css'

const Article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <>
            <h1>This is Article {article[0].id}</h1>
            <h3>{article[0].title}</h3>
            <p>{article[0].body}</p>
            <Link href='/' passHref><b className={styles.btn}>Go Back!</b></Link>
        </>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//    }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Article