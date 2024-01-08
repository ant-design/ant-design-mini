import { useEvent } from 'functional-mini/component';
import { platform } from '../platform';

export type EventHandler<T> = (value: T, e: any) => void;

export const useHandleCustomEvent = <T>(
  eventName: string,
  handler: EventHandler<T>
) => {
  useEvent(
    eventName,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (eventOrValue: any, alipayEvent?: any) => {
      /// #if ALIPAY
      if (platform() === 'alipay') {
        return handler(eventOrValue, alipayEvent);
      }
      /// #endif

      /// #if WECHAT
      return handler(eventOrValue.detail, eventOrValue);
      /// #endif
    }
  );
};

export type MultipleValueEventHandler<T> = (...args: any[]) => void;

export const useMultipleValueHandleCustomEvent = <T extends any[]>(
  eventName: string,
  handler: MultipleValueEventHandler<T>
) => {
  useEvent(
    eventName,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      /// #if ALIPAY
      if (platform() === 'alipay') {
        return handler(...args);
      }
      /// #endif

      /// #if WECHAT
      const firstArgs = args[0];
      if (Array.isArray(firstArgs.detail)) {
        const wechatArgs = firstArgs.detail.concat(firstArgs);
        return handler(...wechatArgs);
      } else {
        return handler([firstArgs.detail, firstArgs]);
      }
      /// #endif
    }
  );
};

export type EventOnlyHandler = (e: any) => void;

export const useHandleCustomEventOnly = (
  eventName: string,
  handler: EventOnlyHandler
) => {
  useEvent(
    eventName,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event) => {
      /// #if ALIPAY
      if (platform() === 'alipay') {
        return handler(event);
      }
      /// #endif

      /// #if WECHAT
      return handler(event);
      /// #endif
    }
  );
};
