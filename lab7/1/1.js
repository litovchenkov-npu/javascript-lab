const LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3
};

let logLevelThreshold = LOG_LEVELS.INFO;

function setLogLevelThreshold(level) {
    if (Object.values(LOG_LEVELS).includes(level)) {
        logLevelThreshold = level;
    } else {
        console.error('Invalid log level provided.');
    }
}

function log(message, level = LOG_LEVELS.INFO) {
    if (level >= logLevelThreshold) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level}] ${message}`);
    }
}

module.exports = { LOG_LEVELS, log, setLogLevelThreshold };