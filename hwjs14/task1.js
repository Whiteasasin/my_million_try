// task 1

const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

async function getInvalidLink() {
    try{
        const responce = await axios.get(`${baseURL}/inv`);
        return responce.data;
    }catch{
        throw new Error('Oh no , invalid link fetch');
    }
};

module.exports = getInvalidLink;