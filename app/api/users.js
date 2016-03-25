import { publicFetch } from './';

function getAll(data) {
    return publicFetch('api/get', 'get');
}

function getSingle(id) {
    let data = {id: id};
      data = JSON.stringify(data);

    return publicFetch(`api/get/${data}`, 'get');
}

function post(data) {
     data = JSON.stringify(data);
     return publicFetch(`api/put/${data}`, 'post');
}

function update(data) {
    data = JSON.stringify(data);
    return publicFetch(`api/update/${data}`, 'post');
}

export default {
    getAll,
    getSingle,
    post,
    update
};
