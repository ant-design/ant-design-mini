import { implJsapi } from './base';

export const createCanvasContext = implJsapi<Promise<any>, [string, any]>({
  alipay: (instance, args: [string, any]) => {
    return new Promise<any>((resolve) => {
      const res = instance.createCanvasContext(args[0]);
      resolve(res);
    });
  },
});
