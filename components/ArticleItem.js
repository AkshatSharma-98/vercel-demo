import Link from 'next/link'
import articleStyle from '../styles/Article.module.css'

export default function ArticleItem({ article }) {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`} passHref>
            <div className={articleStyle.item}>
                <h2>TITLE: {article.title}</h2>
                <h3>ID: {article.id}</h3>
                <p><b>BODY: </b>{article.body}</p>
            </div>
        </Link>
    )
}
