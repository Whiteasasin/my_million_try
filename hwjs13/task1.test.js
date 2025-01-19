////task 1

const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
    console.log('Starting Request', {
        url: request.url,
        method: request.method,
        data: request.data,
    });
    return request;
});

axios.interceptors.response.use(response => {
    console.log('Response:', {
        status: response.status,
        data: response.data,
    });
    return response;
});

describe('Testing API using base URL', () => {
    jest.setTimeout(10000);
    
    test('GET /posts - Отримання списку постів', async () => {
        const response = await axios.get(`${baseURL}/posts`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('Get /post / id - получаем конкретный поста по айдишнику ', async() => {
        const response = await axios.get(`${baseURL}/posts/2`);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 2);
    });

    test('Post / пост новый делаем ', async() => {
        const newPost = {
            title : 'Заголовок который новый ',
            body : 'Тестовое содержание ',
            userId : '1'
        };
        const response = await axios.post(`${baseURL}/posts`, newPost)
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(newPost);
        expect(response.data).toHaveProperty('id');
    });

    test('GET /users - Отримання списку постів', async () => {
        const response = await axios.get(`${baseURL}/users`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data[0]).toHaveProperty('id');
    });

    test('Post /coments - Новый коммент постим ', async () => {
        newCom = {
            postId : 1,
            name : 'Oleksii',
            email: 'Oleksii_test@example.com',
            body: 'ам ам ам ам ам ам ам ам - поел '
        };
        const response = await axios.post(`${baseURL}/comments` , newCom);
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(newCom);
    });
});


