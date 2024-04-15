const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

const cryptoCurrencies = [
    { name: 'BTC', rate: 50000 },
    { name: 'ETH', rate: 2000 },
    { name: 'LTC', rate: 150 },
    { name: 'XRP', rate: 1.5 },
    { name: 'ADA', rate: 1.2 }
];

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function updateRates() {
    cryptoCurrencies.forEach(crypto => {
        crypto.rate += getRandomNumber(-100, 100);
    });

    return cryptoCurrencies;
}

wss.on('connection', function connection(ws) {
    console.log('client connected');

    let interval;

    function sendRates() {
        const updatedRates = updateRates();
        ws.send(JSON.stringify(updatedRates));
        const randomInterval = getRandomNumber(1000, 20000);
        clearInterval(interval);
        interval = setInterval(sendRates, randomInterval);
    }

    sendRates();

    ws.on('close', function() {
        clearInterval(interval);
        console.log('client disconnected');
    });
});
