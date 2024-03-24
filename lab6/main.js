function init() {
    const mainDiv = document.getElementById('main');

    const newHeader = document.createElement('header');
    const newMain = document.createElement('main');
    const newFooter = document.createElement('footer');

    const leftPanel = document.createElement('div');
    const content = document.createElement('div');
    const rightPanel = document.createElement('div');

    leftPanel.classList.add('leftPanel');
    content.classList.add('content');
    rightPanel.classList.add('rightPanel');

    newMain.appendChild(leftPanel);
    newMain.appendChild(content);
    newMain.appendChild(rightPanel);

    function createLoader(parent) {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        parent.appendChild(loader);
    }

    createLoader(leftPanel);
    createLoader(content);
    createLoader(rightPanel);

    document.body.insertBefore(newHeader, mainDiv);
    document.body.insertBefore(newMain, mainDiv);
    document.body.insertBefore(newFooter, mainDiv);

    const headerButtons = ['User Rating', 'News', 'Contacts', 'About'];
    headerButtons.forEach(buttonText => {
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.addEventListener('click', () => {
            content.textContent = buttonText;
        });
        newHeader.appendChild(button);
    });

    setTimeout(() => {
        const loader = content.querySelector('.loader');
        loader.remove();

        content.textContent = 'No users';
        const getUsersButton = document.createElement('button');
        getUsersButton.textContent = 'Get Users';

        getUsersButton.addEventListener('click', () => {
            getUsersButton.disabled = true;
            const leftLoader = leftPanel.querySelector('.loader');
            leftLoader.remove();

            const rightLoader = rightPanel.querySelector('.loader');
            rightLoader.remove();

            fetchUsers().then(users => {
                content.innerHTML = '';
                const table = document.createElement('table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => `
                            <tr>
                                <td>${user.firstname}</td>
                                <td>${user.lastname}</td>
                                <td>${user.score}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;

                const lastnameHeader = table.querySelector('thead th:nth-child(2)');
                lastnameHeader.addEventListener('click', () => {
                    const rows = Array.from(table.querySelectorAll('tbody tr'));
                    rows.sort((a, b) => {
                        const lastnameA = a.cells[1].textContent.trim().toLowerCase();
                        const lastnameB = b.cells[1].textContent.trim().toLowerCase();
                        return lastnameA.localeCompare(lastnameB);
                    });
                    table.querySelector('tbody').innerHTML = '';
                    rows.forEach(row => table.querySelector('tbody').appendChild(row));
                });

                content.appendChild(table);

                const searchInput = document.createElement('input');
                searchInput.setAttribute('type', 'text');
                leftPanel.appendChild(searchInput);

                const searchButton = document.createElement('button');
                searchButton.textContent = 'Search';
                searchButton.addEventListener('click', () => {
                    const searchText = searchInput.value.trim().toLowerCase();
                    const [firstname, lastname] = searchText.split(' ');
                    const rows = table.getElementsByTagName('tr');
                    for (let i = 1; i < rows.length; i++) {
                        const cells = rows[i].getElementsByTagName('td');
                        let found = false;
                        for (let j = 0; j < cells.length; j++) {
                            const cellText = cells[j].textContent.trim().toLowerCase();
                            if (cellText.includes(firstname || lastname || (firstname + ' ' + lastname))) {
                                found = true;
                                break;
                            }
                        }
                        found === true ? rows[i].classList.add('found') : rows[i].classList.remove('found');
                    }
                });
                leftPanel.appendChild(searchButton);

                const score = users.reduce((total, user) => total + user.score, 0);
                const totalScore = document.createElement('div');
                totalScore.innerHTML = `
                    <p>
                        Total user score: ${score}
                    </p>
                `;

                rightPanel.appendChild(totalScore);
                rightPanel.appendChild(editTableCheckbox);
                rightPanel.appendChild(editTableLabel);

            }).catch(error => {
                console.error('Error fetching users:', error);
                content.textContent = 'Error fetching users';
            });
        });
        content.appendChild(getUsersButton);
    }, 1000);

    const currentUsers = document.createElement('div');
    currentUsers.textContent = `Current users: ${users.length}`;

    const recentUsers = users.slice(-5);

    const newUsers = document.createElement('div');
    newUsers.textContent = 'New users: ';
    recentUsers.forEach((user, index) => {
        const userSpan = document.createElement('span');
        userSpan.textContent = `${user.firstname} ${user.lastname}`;
        if (index < recentUsers.length - 1) {
            userSpan.textContent += ', ';
        } else {
            userSpan.textContent += '.';
        }
        newUsers.appendChild(userSpan);
    });

    newFooter.appendChild(currentUsers);
    newFooter.appendChild(newUsers);

    const editTableCheckbox = document.createElement('input');
    editTableCheckbox.setAttribute('type', 'checkbox');
    editTableCheckbox.setAttribute('id', 'editTableCheckbox');

    const editTableLabel = document.createElement('label');
    editTableLabel.setAttribute('for', 'editTableCheckbox');
    editTableLabel.textContent = 'Edit table';

    editTableCheckbox.addEventListener('change', () => {
        const table = content.querySelector('table');
        if (editTableCheckbox.checked) {
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const deleteButtonCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    row.remove();
                });
                deleteButtonCell.appendChild(deleteButton);
                row.appendChild(deleteButtonCell);
            });
        } else {
            const deleteColumnHeader = table.querySelector('thead tr th:last-child');
            if (deleteColumnHeader) {
                deleteColumnHeader.remove();
            }

            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.querySelector('td:last-child').remove();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', init);