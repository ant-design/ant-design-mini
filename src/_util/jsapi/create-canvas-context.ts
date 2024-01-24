import { implJsapi } from './base';

export const createCanvasContext = implJsapi<Promise<any>, [string, any]>({
  /// #if WECHAT
  wechat: (instance, args: [string, any]) => {
    return new Promise<any>((resolve) => {
      const res = instance.createCanvasContext(args[0], args[1]);
      resolve(res);
    });
  },
  /// #endif
  alipay: (instance, args: [string, any]) => {
    return new Promise<any>((resolve) => {
      const res = instance.createCanvasContext(args[0]);
      resolve(res);
    });
  },
});
