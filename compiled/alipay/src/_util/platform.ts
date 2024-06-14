import { compareVersion } from './compareVersion';

export function supportUndefinedProperty(): boolean {
  let support = true;


  return support;
}

export function platform() {
  let platform = 'unknown';


  platform = 'alipay';

  return platform;
}

export function resolveEventValue(value) {

  return value;
}

export function resolveEventValues(args1: any, args2?: any) {

  return [args1, args2];
}

export function isOldSDKVersion() {
  if (platform() === 'wechat') {
    return false;
  }
  const SDKVersion = my.SDKVersion;
  const isOldVersion = compareVersion(SDKVersion, '2.0.0') < 0;
  return isOldVersion;
}
