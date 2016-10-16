import { ADD_COMMENT } from '../constants'

export default store => next => action => {

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    if (action.type == ADD_COMMENT) {
        action.payload.data.uId = guid();
    }
    next(action)
}