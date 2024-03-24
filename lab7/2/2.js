export default class Logging {
    constructor() {
        this.LOG_LEVELS = {
            DEBUG: 0,
            INFO: 1,
            WARNING: 2,
            ERROR: 3
        };
        this.logLevelThreshold = this.LOG_LEVELS.INFO;
    }

    setLogLevelThreshold(level) {
        if (Object.values(this.LOG_LEVELS).includes(level)) {
            this.logLevelThreshold = level;
        } else {
            console.error('Invalid log level provided.');
        }
    }

    log(message, level = this.LOG_LEVELS.INFO) {
        if (level >= this.logLevelThreshold) {
            const timestamp = new Date().toISOString();
            console.log(`[${timestamp}] [${level}] ${message}`);
        }
    }
}