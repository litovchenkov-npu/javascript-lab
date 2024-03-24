const { LOG_LEVELS, log, setLogLevelThreshold } = require('./1.js');

setLogLevelThreshold(LOG_LEVELS.WARNING);

console.log('Warning messages:');
log('Debug message', LOG_LEVELS.DEBUG);
log('Info message');
log('Warning message', LOG_LEVELS.WARNING);
log('Error message', LOG_LEVELS.ERROR);

setLogLevelThreshold(LOG_LEVELS.DEBUG);

console.log('All messages:');
log('Debug message', LOG_LEVELS.DEBUG);
log('Info message');
log('Warning message', LOG_LEVELS.WARNING);
log('Error message', LOG_LEVELS.ERROR);