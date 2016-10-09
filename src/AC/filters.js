import { SELECT_ARTICLES } from '../constants'
import { SELECT_DATE_RANGE } from '../constants'

export function selectArticles(data) {
    return {
        type: SELECT_ARTICLES,
        payload: { data }
    }
}
export function selectDateRange(range) {
    return {
        type: SELECT_DATE_RANGE,
        payload: { date_range: range }
    }
}