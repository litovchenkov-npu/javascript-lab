function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function wait() {
    console.log('Waiting for 3 seconds...');

    await sleep(3000);
    
    console.log('Done');
}

wait();