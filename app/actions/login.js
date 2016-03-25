export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT        = 'LOGOUT';

export function loginSuccess(token) {
    console.log(token);
    localStorage.setItem('token', token);

    return {
        type: LOGIN_SUCCESS,
        token: {
            token
        },
        isLoggedIn: true
    };
}

export function loginFailure(response) {
    localStorage.removeItem('token');

    return {
        type: LOGIN_FAILURE,
        error: {
            status: response.status,
            message: response.data.message
        },
        isLoggedIn: false
    };
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT,
        isLoggedIn: false  
    };
}
