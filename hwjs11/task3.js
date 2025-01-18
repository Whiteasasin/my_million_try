////task 3 

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const userPromise = fetchUser();
const anotherPromise = fetchUser();

Promise.all([userPromise, anotherPromise])
    .then(results => {
        console.log('Results from Promise.all:', results);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });

Promise.race([userPromise, anotherPromise])
    .then(result => {
        console.log('Result from Promise.race:', result);
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });