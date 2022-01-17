import ArticleItem from "./ArticleItem"

export default function ArticleList({ articles }) {
    return (
        <>
            {
                articles.map(article => (
                    <ul key={article.id}>
                        <ArticleItem article={article} />
                    </ul>
                ))
            }
        </>
    )
}
