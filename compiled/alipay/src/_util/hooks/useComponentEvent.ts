import { useComponent } from 'functional-mini/component';
import fmtEvent from '../fmtEvent';
import { useEvent } from './useEvent';

export function useComponentEvent<T>(props: T) {
  const component = useComponent();
  const triggerEvent = useEvent(
    (eventName: string, value: unknown, e?: any) => {
      // 首字母大写，然后加上 on

      const alipayCallbackName =
        'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

      if (props[alipayCallbackName]) {
        props[alipayCallbackName](value, fmtEvent(props, e));
      }

    }
  );

  const triggerEventValues = useEvent(
    (eventName: string, values: any[], e?: any) => {
      // 首字母大写，然后加上 on

      const alipayCallbackName =
        'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

      if (props[alipayCallbackName]) {
        props[alipayCallbackName](...values, fmtEvent(props, e));
      }

    }
  );
  const triggerEventOnly = useEvent((eventName: string, e?: any) => {
    // 首字母大写，然后加上 on

    const alipayCallbackName =
      'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    if (props[alipayCallbackName]) {
      props[alipayCallbackName](fmtEvent(props, e));
    }

  });

  const alipayForwardCatchEvent = useEvent((eventName: string, e: any) => {
    // 首字母大写，然后加上 catch

    const alipayCallbackName =
      'catch' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    if (props[alipayCallbackName]) {
      props[alipayCallbackName](fmtEvent(props, e));
    }
  });

  const alipayForwardEvent = useEvent((eventName: string, e: any) => {
    // 首字母大写，然后加上 on

    const alipayCallbackName =
      'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    if (props[alipayCallbackName]) {
      props[alipayCallbackName](fmtEvent(props, e));
    }
  });

  return {
    triggerEvent,
    triggerEventValues,
    triggerEventOnly,
    // 转发 catch 事件
    alipayForwardCatchEvent,
    // 转发事件
    alipayForwardEvent,
  };
}
