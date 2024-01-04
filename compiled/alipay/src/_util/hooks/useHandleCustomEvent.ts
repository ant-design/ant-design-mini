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
      if (platform() === 'alipay') {
        return handler(eventOrValue, alipayEvent);
      }

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
      if (platform() === 'alipay') {
        return handler(...args);
      }

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
      if (platform() === 'alipay') {
        return handler(event);
      }

    }
  );
};
