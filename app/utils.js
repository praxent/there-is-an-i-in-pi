import {
    logout
} from './actions/login'
import jwtDecode from 'jwt-decode';

function getRoles() {
    const token = localStorage.getItem('token');

    if (!token) {
        return [];
    }

    const user = jwtDecode(token);
    console.log(token);
    return user.roles;
}

export function stateToProps(state) {
    return {
        isLogginIn: state.login.isLoggedIn
    };
}

export function dispatchToProps(dispatch) {
    return {
        isInRole: role => {
            const roles = getRoles();
            return roles.some(r => r === role);
        },
        isInRoles: roles => {
            const userRoles = getRoles();
            return userRoles.some(ur => ur === roles.find(r => r === ur));
        },
        logout: () => {
            dispatch(logout());
        }
    };
}
