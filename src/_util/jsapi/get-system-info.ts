import { implJsapi } from './base';

export interface SystemInfo {
  windowWidth: number;
  windowHeight: number;
  pixelRatio: number;
}

export const getSystemInfo = implJsapi<Promise<SystemInfo>, undefined>({
  /// #if WECHAT
  wechat: (instance) => {
    return new Promise((resolve, reject) => {
      instance.getSystemInfo({
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  /// #endif
  alipay: (instance) => {
    return new Promise<{
      windowWidth: number;
      windowHeight: number;
      pixelRatio: number;
    }>((resolve, reject) => {
      instance.getSystemInfo({
        success: (res) => {
          resolve(res);
        },
        fail: () => {
          reject();
        },
      });
    });
  },
});
