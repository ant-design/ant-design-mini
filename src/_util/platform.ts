import { compareVersion } from './compareVersion';

export function supportUndefinedProperty(): boolean {
  let support = true;

  /// #if WECHAT
  support = false;
  /// #endif

  return support;
}

export function platform() {
  let platform = 'unknown';

  /// #if WECHAT
  platform = 'wechat';
  /// #endif

  /// #if ALIPAY
  platform = 'alipay';
  /// #endif

  return platform;
}

export function resolveEventValue(value) {
  /// #if WECHAT

  if (platform() === 'wechat') {
    return value.detail;
  }
  /// #endif

  return value;
}

export function resolveEventValues(args1: any, args2?: any, ...rest) {
  /// #if WECHAT

  if (platform() === 'wechat') {
    return args1.detail;
  }
  /// #endif

  return [args1, args2, ...rest];
}

export function isOldSDKVersion() {
  if (platform() === 'wechat') {
    return false;
  }
  const SDKVersion = my.SDKVersion;
  const isOldVersion = compareVersion(SDKVersion, '2.0.0') < 0;
  return isOldVersion;
}
