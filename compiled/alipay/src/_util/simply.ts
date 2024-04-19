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
    ...defaultProps,
  };
}

type ComponentInstance<Props, Methods, Data, Mixins> = unknown;

function ComponentImpl<
  Props,
  Methods = unknown,
  Data = unknown,
  Mixins = unknown
>(
  defaultProps: Props,
  methods?: Methods & ThisType<ComponentInstance<Props, Methods, Data, Mixins>>,
  data?: Data & any,
  mixins?: Mixins & any
) {

  Component({
    props: removeNullProps(mergeDefaultProps(defaultProps)),
    methods,
    mixins,
    data,
  });
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

  const alipayCallbackName =
    'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
  const props = instance.props;
  if (props[alipayCallbackName]) {
    props[alipayCallbackName](value, fmtEvent(props, e));
  }

}

export function triggerEventOnly(instance: any, eventName: string, e?: any) {
  // 首字母大写，然后加上 on

  const alipayCallbackName =
    'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
  const props = instance.props;
  if (props[alipayCallbackName]) {
    props[alipayCallbackName](fmtEvent(props, e));
  }

}

export function triggerEventValues(
  instance: any,
  eventName: string,
  values: any[],
  e?: any
) {
  // 首字母大写，然后加上 on

  const alipayCallbackName =
    'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
  const props = instance.props;
  if (props[alipayCallbackName]) {
    props[alipayCallbackName](...values, fmtEvent(props, e));
  }

}

export function triggerCatchEvent(instance: any, eventName: string, e?: any) {
  const props = instance.props;
  if (props[eventName]) {
    props[eventName](fmtEvent(props, e));
  }

}

export function getValueFromProps(instance: any, propName?: string) {
  let value;
  const props = instance.props;
  if (!propName) {
    return props;
  }
  value = props[propName];


  return value;
}

export { ComponentImpl as Component };
