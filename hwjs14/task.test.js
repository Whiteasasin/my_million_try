///first task 


const getInvalidLink = require('./task1');

describe('testing invalid url fnc', () => {
    test('shoulndt throw an error for inv url' , async () => {
        await expect(getInvalidLink()).rejects.toThrow('invalid url');
    });
});

/// task 2 

const fetchWithCustomHeaders = require('./task2');
const axios = require('axios');

jest.mock('axios');

describe('fetchWithCustomHeaders', () => {
    test('should include custom headers and params in request', async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const params = { userId: 1 };
        const headers = { 'Authorization': 'Bearer token' };

       
        axios.get.mockResolvedValue({ data: [] });

        await fetchWithCustomHeaders(url, params, headers);

        
        expect(axios.get).toHaveBeenCalledWith(url, {
            params: params,
            headers: headers
        });
    });
});

