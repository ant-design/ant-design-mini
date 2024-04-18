import fmtEvent from './fmtEvent';

function removeNullProps(props) {
  const newProps = {};
  for (const key in props) {
    if (props[key] !== null) {
      newProps[key] = props[key];
    }
  }
  return newProps;
}

function buildProperties(props) {
  const newProperties = {};
  for (const key in props) {
    let type = null;
    switch (typeof props[key]) {
      case 'string':
        type = String;
        break;
      case 'number':
        type = Number;
        break;
      case 'boolean':
        type = Boolean;
        break;
    }
    newProperties[key] = {
      type,
      value: props[key],
    };
  }
  return newProperties;
}

function mergeDefaultProps(defaultProps: Record<string, any> = {}) {
  return {
    /// #if WECHAT
    className: '',
    style: '',
    /// #endif
    ...defaultProps,
  };
}

type ComponentInstance<Props, Methods, Mixins> = unknown;

function ComponentImpl<Props, Methods = unknown, Mixins = unknown>(
  defaultProps: Props,
  methods?: Methods & ThisType<ComponentInstance<Props, Methods, Mixins>>,
  mixins?: Mixins & any
) {
  /// #if WECHAT
  Component({
    properties: buildProperties(mergeDefaultProps(defaultProps)),
    options: {
      styleIsolation: 'shared',
      multipleSlots: true,
      virtualHost: true,
    } as any,
    methods,
    behaviors: mixins,
  });
  /// #endif

  /// #if ALIPAY
  Component({
    props: removeNullProps(mergeDefaultProps(defaultProps)),
    methods,
    mixins,
  });
  /// #endif
}

export interface IPlatformEvent {
  currentTarget: {
    dataset: Record<string, unknown>;
  };
  target: {
    dataset: Record<string, unknown>;
  };
}

export function triggerEvent(
  instance: any,
  eventName: string,
  value: unknown,
  e?: any
) {
  // 首字母大写，然后加上 on

  /// #if ALIPAY
  const alipayCallbackName =
    'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
  const props = instance.props;
  if (props[alipayCallbackName]) {
    props[alipayCallbackName](value, fmtEvent(props, e));
  }
  /// #endif

  /// #if WECHAT
  instance.triggerEvent(eventName.toLocaleLowerCase(), value);
  /// #endif
}

export function triggerEventOnly(instance: any, eventName: string, e?: any) {
  // 首字母大写，然后加上 on

  /// #if ALIPAY
  const alipayCallbackName =
    'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
  const props = instance.props;
  if (props[alipayCallbackName]) {
    props[alipayCallbackName](fmtEvent(props, e));
  }
  /// #endif

  /// #if WECHAT
  instance.triggerEvent(eventName.toLocaleLowerCase());
  /// #endif
}

export function triggerEventValues(
  instance: any,
  eventName: string,
  values: any[],
  e?: any
) {
  // 首字母大写，然后加上 on

  /// #if ALIPAY
  const alipayCallbackName =
    'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
  const props = instance.props;
  if (props[alipayCallbackName]) {
    props[alipayCallbackName](...values, fmtEvent(props, e));
  }
  /// #endif

  /// #if WECHAT
  instance.triggerEvent(eventName.toLocaleLowerCase(), values);
  /// #endif
}

export function triggerCatchEvent(instance: any, eventName: string, e?: any) {
  /// #if ALIPAY
  const props = instance.props;
  if (props[eventName]) {
    props[eventName](fmtEvent(props, e));
  }
  /// #endif

  /// #if WECHAT
  instance.triggerEvent(eventName.toLocaleLowerCase());
  /// #endif
}

export function getValueFromProps(instance: any, propName?: string) {
  let value;
  /// #if ALIPAY
  const props = instance.props;
  if (!propName) {
    return props;
  }
  value = props[propName];
  /// #endif

  /// #if WECHAT
  const properties = instance.properties;
  if (!propName) {
    return properties;
  }
  value = properties[propName];
  /// #endif

  return value;
}

export { ComponentImpl as Component };
