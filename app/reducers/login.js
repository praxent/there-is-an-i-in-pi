import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
}  from '../actions/login';

export default function login(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                token: action.token
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                token: action.error
            });
        case LOGOUT:
            return {...state};
        default:
            return {...state};
    }
}
