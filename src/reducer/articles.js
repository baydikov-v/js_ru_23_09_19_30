import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case ADD_COMMENT:
            articles[payload.data.articleId].comments.push(payload.data.uId)
            return articles
    }

    return articles
}
