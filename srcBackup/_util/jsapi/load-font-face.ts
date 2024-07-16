import { implJsapi } from './base';

export interface LoadFontOptions {
  family: string;
  source: string;
}

export const loadFontFace = implJsapi<Promise<void>, LoadFontOptions>({
  /// #if WECHAT
  wechat: (instance, options) => {
    return new Promise((resolve, reject) => {
      instance.loadFontFace({
        family: options.family,
        source: options.source,
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
  alipay: (instance, options) => {
    return new Promise((resolve, reject) => {
      instance.loadFontFace({
        family: options.family,
        source: options.source,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
});
