import { compareVersion } from './compareVersion';
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
export function resolveEventValues(args1, args2) {
    if (platform() === 'wechat') {
        return args1.detail;
    }
    return [args1, args2];
}
export function isOldSDKVersion() {
    if (platform() === 'wechat') {
        return false;
    }
    var SDKVersion = my.SDKVersion;
    var isOldVersion = compareVersion(SDKVersion, '2.0.0') < 0;
    return isOldVersion;
}
