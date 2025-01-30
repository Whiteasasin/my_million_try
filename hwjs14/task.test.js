///first task 


const getInvalidLink = require('./task1');

describe('testing invalid url fnc', () => {
    test('shoulndt throw an error for inv url' , async () => {
        await expect(getInvalidLink()).rejects.toThrow('invalid url');
    });
});