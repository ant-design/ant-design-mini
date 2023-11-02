import { platform } from '../platform';

interface JSAPIImpl<T, A> {
  wechat: (instance: any, args: A) => T;
  alipay: (instance: any, args: A) => T;
}

export function implJsapi<T, A>(impl: JSAPIImpl<T, A>) {
  return (args?: A) => {
    /// #if WECHAT
    if (platform() === 'wechat') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return impl.wechat(wx, args);
    }
    /// #endif

    if (platform() === 'alipay') {
      return impl.alipay(my, args);
    }

    throw new Error('unsupported platform');
  };
}
