/* eslint-disable no-console */
export function compareVersion(v1: string, v2: string): number {
  if (v1 === v2) return 0;
  const v1Arr = v1.split('.');
  const v2Arr = v2.split('.');
  const len = v1Arr.length < v2Arr.length ? v1Arr.length : v2Arr.length;
  let i = 0;
  while (i <= len) {
    if (v1Arr[i] === v2Arr[i]) {
      i++;
    } else if (!v1Arr[i] || !v2Arr[i]) {
      return v1Arr.length > v2Arr.length ? 1 : -1;
    } else {
      // eslint-disable-next-line no-nested-ternary
      return Number(v1Arr[i]) === Number(v2Arr[i])
        ? 0
        : Number(v1Arr[i]) > Number(v2Arr[i])
          ? 1
          : -1;
    }
  }
}

let currentVersion: string;

export function getCurrentVersion(): string {
  if (typeof currentVersion === 'string') return currentVersion;

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const version = require('../../package.json').version as string;
    // 1.0.6 or 1.0.6-beat.1
    currentVersion = version.split('-')[0];
    return currentVersion;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 检测 antd-mini 版本是否高于特定版本
 * @returns
 */
export function compareAntdMiniVersion(version: string): boolean {
  return compareVersion(getCurrentVersion(), version) > 0;
}


export const isMoreThan106 = compareAntdMiniVersion('1.0.6');
