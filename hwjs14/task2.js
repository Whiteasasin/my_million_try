/// task2 

const axios = require('axios');

async function getHeaders(url, params, headers) {
    const responce = await axios.get(url, {
        params: params,
        headers: headers
    });
    return responce.data;
}

module.exports = getHeaders;