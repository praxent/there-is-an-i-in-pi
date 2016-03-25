import axios from 'axios';
import login from './login';

const base = 'http://pi.dev';

function checkHttpStatus(response, isLogin) {
    console.log(`checkHttpStatus ${response.status}`);
    if(response.status === 200) {
        return response.data;
    }
    else {
        console.log(response);
    }
}

const publicFetch = (path, method, data) => {
    return axios({
        url: `${base}/public${path}`,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: data
    })
    .then(checkHttpStatus);
};

const protectedFetch = (path, options) => {
    return axios({
        url: `base/api${path}`
    });
};

export {
    publicFetch,
    protectedFetch,
    login
}
