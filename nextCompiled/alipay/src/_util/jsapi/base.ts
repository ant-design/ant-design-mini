import { platform } from '../platform';

interface JSAPIImpl<T, A> {
  wechat?: (instance: any, args: A) => T;
  alipay?: (instance: any, args: A) => T;
}

export function implJsapi<T, A>(impl: JSAPIImpl<T, A>) {
  return (args?: A) => {

    if (platform() === 'alipay' && impl.alipay) {
      return impl.alipay(my, args);
    }

    throw new Error('unsupported platform');
  };
}
