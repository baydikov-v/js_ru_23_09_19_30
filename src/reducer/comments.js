import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT } from '../constants'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            var uId = payload.data.uId;
            var new_comments = Object.assign({}, comments, {
                [uId]: {
                    id: uId,
                    user: payload.data.user,
                    text: payload.data.text
                }
            });
            return new_comments;
    }

    return comments
}