import Logging from './2.js';

const logger = new Logging();

logger.setLogLevelThreshold(logger.LOG_LEVELS.WARNING);
console.log('Warning messages:');
logger.log('Debug message', logger.LOG_LEVELS.DEBUG);
logger.log('Info message');
logger.log('Warning message', logger.LOG_LEVELS.WARNING);
logger.log('Error message', logger.LOG_LEVELS.ERROR);

logger.setLogLevelThreshold(logger.LOG_LEVELS.DEBUG);

console.log('All messages:');
logger.log('Debug message', logger.LOG_LEVELS.DEBUG);
logger.log('Info message');
logger.log('Warning message', logger.LOG_LEVELS.WARNING);
logger.log('Error message', logger.LOG_LEVELS.ERROR);