var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (platform() === 'wechat') {
        return args1.detail;
    }
    return __spreadArray([args1, args2], rest, true);
}
export function isOldSDKVersion() {
    if (platform() === 'wechat') {
        return false;
    }
    var SDKVersion = my.SDKVersion;
    var isOldVersion = compareVersion(SDKVersion, '2.0.0') < 0;
    return isOldVersion;
}
