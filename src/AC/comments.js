import { ADD_COMMENT } from '../constants'

export function addComment(data) {
    return {
        type: ADD_COMMENT,
        payload: { data }
    }
}