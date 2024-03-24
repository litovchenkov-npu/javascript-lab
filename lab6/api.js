// api.js

// Масив з 20 об'єктами користувачів
const users = [
    { firstname: 'John', lastname: 'Doe', score: 85 },
    { firstname: 'Alice', lastname: 'Smith', score: 92 },
    { firstname: 'Bob', lastname: 'Johnson', score: 78 },
    { firstname: 'Emily', lastname: 'Williams', score: 91 },
    { firstname: 'Michael', lastname: 'Brown', score: 88 },
    { firstname: 'Emma', lastname: 'Jones', score: 79 },
    { firstname: 'William', lastname: 'Garcia', score: 84 },
    { firstname: 'Olivia', lastname: 'Martinez', score: 95 },
    { firstname: 'James', lastname: 'Hernandez', score: 90 },
    { firstname: 'Sophia', lastname: 'Lopez', score: 87 },
    { firstname: 'Benjamin', lastname: 'Gonzalez', score: 93 },
    { firstname: 'Isabella', lastname: 'Wilson', score: 82 },
    { firstname: 'Ethan', lastname: 'Anderson', score: 89 },
    { firstname: 'Charlotte', lastname: 'Thomas', score: 77 },
    { firstname: 'Daniel', lastname: 'Taylor', score: 94 },
    { firstname: 'Ava', lastname: 'Moore', score: 81 },
    { firstname: 'Matthew', lastname: 'Jackson', score: 86 },
    { firstname: 'Mia', lastname: 'White', score: 96 },
    { firstname: 'Jacob', lastname: 'Harris', score: 83 },
    { firstname: 'Harper', lastname: 'Martin', score: 80 }
];

// Функція для вибору випадкових елементів з масиву з затримкою 1 секунда
function fetchUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            const randomUsers = [];
            const shuffledUsers = users.sort(() => 0.5 - Math.random());
            for (let i = 0; i < 10; i++) {
                randomUsers.push(shuffledUsers[i]);
            }
            resolve(randomUsers);
        }, 1000); // Затримка 1 секунда
    });
}

// Функція для отримання перших 5 елементів масиву користувачів
function getNewUsers() {
    return users.slice(0, 5);
}

// export { fetchUsers, getNewUsers };
