function isMainTab() {
    return localStorage.getItem('mainTab') === 'true';
}

function setMainTab() {
    localStorage.setItem('mainTab', 'true');
    document.title = 'Головна вкладка';

    const channel = new BroadcastChannel('mainTabChannel');
    channel.postMessage('mainTabOpened');
}

function checkMainTabExists() {
    return localStorage.getItem('mainTab') !== null;
}

window.addEventListener('beforeunload', () => {
    if (isMainTab()) {
        localStorage.removeItem('mainTab');

        const channel = new BroadcastChannel('mainTabChannel');
        channel.postMessage('mainTabClosed');
    }
});

window.addEventListener('load', () => {
    if (!checkMainTabExists()) {
        setMainTab();
    } else {
        document.title = 'Другорядна вкладка';
    }
});

const channel = new BroadcastChannel('mainTabChannel');
channel.onmessage = (event) => {
    if (event.data === 'mainTabClosed') {
        setMainTab();
    }
};