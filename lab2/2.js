const defaults = {
    mode: "test",
    debugLevel: "error",
    logFolder: "root"
}

const userSetting = {
    mode: "production",
    debugLevel: "trace"
}

// 1 метод
function mergeSettings(defaults, userSetting) {
    return Object.assign({}, defaults, userSetting);
}

// 2 метод
function mergeSettings(defaults, userSetting) {
    return { ...defaults, ...userSetting };
}

// 3 метод
function mergeSettings(defaults, userSetting) {
    const merged = {};
    for (const key in defaults) {
      merged[key] = userSetting.hasOwnProperty(key) ? userSetting[key] : defaults[key];
    }
    return merged;
}

const mergedSettings = mergeSettings(defaults, userSetting);
console.log(mergedSettings);