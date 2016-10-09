import { SELECT_ARTICLES } from '../constants'
import { SELECT_DATE_RANGE } from '../constants'

export default (filters, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_ARTICLES:
            filters.selected = payload.data;
            return filters;
        case SELECT_DATE_RANGE:
            filters.select_date_range = payload.date_range;
            return filters;
    }
    return {};
}