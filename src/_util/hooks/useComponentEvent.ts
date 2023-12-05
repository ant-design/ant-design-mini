import { useComponent } from 'functional-mini/component';
import fmtEvent from '../fmtEvent';
import { useEvent } from './useEvent';

export function useComponentEvent<T>(props: T) {
  const component = useComponent();
  const triggerEvent = useEvent(
    (eventName: string, value: unknown, e?: any) => {
      // 首字母大写，然后加上 on

      /// #if ALIPAY
      const alipayCallbackName =
        'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

      if (props[alipayCallbackName]) {
        props[alipayCallbackName](value, fmtEvent(props, e));
      }
      /// #endif

      /// #if WECHAT
      component.triggerEvent(eventName.toLocaleLowerCase(), value);
      /// #endif
    }
  );

  const triggerEventValues = useEvent(
    (eventName: string, values: any[], e?: any) => {
      // 首字母大写，然后加上 on

      /// #if ALIPAY
      const alipayCallbackName =
        'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

      if (props[alipayCallbackName]) {
        props[alipayCallbackName](...values, fmtEvent(props, e));
      }
      /// #endif

      /// #if WECHAT
      component.triggerEvent(eventName.toLocaleLowerCase(), values);
      /// #endif
    }
  );
  const triggerEventOnly = useEvent((eventName: string, e?: any) => {
    // 首字母大写，然后加上 on

    /// #if ALIPAY
    const alipayCallbackName =
      'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    if (props[alipayCallbackName]) {
      props[alipayCallbackName](fmtEvent(props, e));
    }
    /// #endif

    /// #if WECHAT
    component.triggerEvent(eventName.toLocaleLowerCase());
    /// #endif
  });

  const alipayForwardCatchEvent = useEvent((eventName: string, e: any) => {
    // 首字母大写，然后加上 catch

    /// #if ALIPAY
    const alipayCallbackName =
      'catch' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    if (props[alipayCallbackName]) {
      props[alipayCallbackName](fmtEvent(props, e));
    }
    /// #endif
  });

  const alipayForwardEvent = useEvent((eventName: string, e: any) => {
    // 首字母大写，然后加上 on

    /// #if ALIPAY
    const alipayCallbackName =
      'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    if (props[alipayCallbackName]) {
      props[alipayCallbackName](fmtEvent(props, e));
    }
    /// #endif
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
