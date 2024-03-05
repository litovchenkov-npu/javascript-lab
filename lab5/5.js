const userArray = [
    {
        name: 'John',
        age: 31,
        city: 'Boston',
        id: 0
    },
    {
        name: 'Jane',
        age: 23,
        city: 'New York',
        id: 1
    },
    {
        name: 'Scott',
        age: 44,
        city: 'London',
        id: 2
    },
    {
        name: 'Maria',
        age: 21,
        city: 'Frankfurt',
        id: 3
    },
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userArray.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

function loadUsers(idArray) {
    for(let i = 0; i < idArray.length; i++) {
        getUser(i)
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
}

loadUsers([0, 1, 2, 3, 4]);