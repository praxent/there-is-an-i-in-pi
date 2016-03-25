import { publicFetch } from './';

function authenticate(data) {
    return publicFetch('/auth/login', 'post', data);
}

export default {
    authenticate
};
