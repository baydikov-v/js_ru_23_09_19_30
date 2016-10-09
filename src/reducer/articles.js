import { articles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { SEARCH_ARTICLES } from '../constants'

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case SEARCH_ARTICLES:
            const filters = payload.filters;
            var results = articles;
            if (typeof filters.selected != 'undefined' && filters.selected.length) {
                results = results.filter(article => {
                    return filters.selected.indexOf(article.id) != -1;
                })
            }
            return results;


    }

    return articles
}
