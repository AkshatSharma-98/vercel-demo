import { useRouter } from "next/router"
import Link from 'next/link'

const Article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <>
            <h1>This is Article {article.id}</h1>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <Link href='/'>Go Back!</Link>
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
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Article