import { platform } from '../platform';
export function implJsapi(impl) {
    return function (args) {
        if (platform() === 'wechat') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            return impl.wechat(wx, args);
        }
        if (platform() === 'alipay') {
            return impl.alipay(my, args);
        }
        throw new Error('unsupported platform');
    };
}
