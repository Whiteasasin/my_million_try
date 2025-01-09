/// task 2 

function fetRespond() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Problem with network ');
            }
            return response.json(); 
        })
        .catch(error => {
            console.error('Problem with ur url or smth else : ', error);
        });
}


fetRespond()
    .then(todo => {
        console.log(todo); 
    })
    .catch(error => {
        console.error('Error fetching:', error);
    });


    function fetchUser() {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
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