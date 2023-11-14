export function supportUndefinedProperty() {
    var support = true;
    support = false;
    return support;
}
export function platform() {
    var platform = 'unknown';
    platform = 'wechat';
    return platform;
}
export function resolveEventValue(value) {
    if (platform() === 'wechat') {
        return value.detail;
    }
    return value;
}
