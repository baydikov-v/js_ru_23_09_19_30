import { DELETE_ARTICLE } from '../constants'
import { SEARCH_ARTICLES } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function searchArticles(filters) {
    return {
        type: SEARCH_ARTICLES,
        payload: { filters }
    }
}