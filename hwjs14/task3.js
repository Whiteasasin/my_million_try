//task3


const axios = require('axios');

async function fetchData(url) {
    try{
        const responce = await axios.get(url);
        return responce.data;
    } catch(error){
        throw new Error('aga new error with fetch');
    }
}

module.exports = fetchData;