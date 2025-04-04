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

type ComponentInstance<Props, Methods, Data, Mixins, InstanceMethods> = unknown;

// 增加store使用的版本
interface IComponentOptions {
  // TODO: 需要考虑没有启用 Component2 的情况
  onInit?: () => void;
  didUnmount?: () => void;
}
type ExtendedInstanceMethods = Partial<IComponentOptions> & Record<string, any>;
export const ComponentWithSignalStoreImpl = <
  S,
  M extends Record<string, (o: { store: S }) => unknown>,
  Props,
  Methods = unknown,
  Data = unknown,
  Mixins = unknown,
  InstanceMethods extends ExtendedInstanceMethods = ExtendedInstanceMethods
>({
  storeOptions,
  props: defaultProps,
  methods,
  data,
  mixins,
  ...instanceMethods
}: {
  storeOptions?: TStoreOptions<S, M>;
  props?: Props;
  methods?: Methods;
  data?: Data;
  mixins?: Mixins & any;
} & InstanceMethods) => {
  const storeBinder = new StoreBinder(storeOptions);

  const defaultOnInit = function () {
    storeBinder.init(this as unknown as TStoreInitOptions<S>);
  };
  const instanceMethodsCopy: ExtendedInstanceMethods = { ...instanceMethods };

  /// #if ALIPAY || BUNDLE2H
  // 确保 instanceMethods 存在
  // 备份原有的 onInit 和 didUnmount 方法
  const onInitBackup = instanceMethodsCopy.onInit || (() => {});
  const onDidUnmountBackup = instanceMethodsCopy.didUnmount || (() => {});

  instanceMethodsCopy.onInit = function () {
    defaultOnInit.call(this);
    if (onInitBackup) {
      onInitBackup.call(this);
    }
  };

  instanceMethodsCopy.didUnmount = function () {
    if (onDidUnmountBackup) {
      onDidUnmountBackup.call(this);
    }
    storeBinder.dispose();
  };

  // 这里确保 instanceMethodsCopy.onInit 被正确执行
  if (!instanceMethodsCopy.onInit) {
    instanceMethodsCopy.onInit = defaultOnInit;
  }
  /// #endif

  /// #if WECHAT
  const attachedBackup = instanceMethodsCopy.attached || (() => {});
  const detachedBackup = instanceMethodsCopy.detached || (() => {});

  instanceMethodsCopy.attached = function () {
    defaultOnInit.call(this);
    if (attachedBackup) {
      attachedBackup.call(this);
    }
  };

  instanceMethodsCopy.detached = function () {
    if (detachedBackup) {
      detachedBackup.call(this);
    }
    storeBinder.dispose();
  };

  if (!instanceMethodsCopy.created) {
    instanceMethodsCopy.created = defaultOnInit;
  }
  /// #endif

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
    data,
    ...(instanceMethodsCopy || {}),
  });
  /// #endif

  /// #if ALIPAY || BUNDLE2H
  Component({
    props: removeNullProps(mergeDefaultProps(defaultProps)),
    methods,
    mixins: mixins || [],
    data,
    ...(instanceMethodsCopy || {}),
  });
  /// #endif
};

type TMapState<S> = Record<string, (o: { store: S }) => unknown>;

// 这里类型直接抄了 PageWithAnyStore，但其实对于 antd-mini 的场景，store 和 updateHook 都可以写死而不需要使用时自定义
export type TStoreOptions<S, M extends TMapState<S>> = {
  /**
   * store 的创建器，因为页面会有多实例，所以 store 必须每个页面实例单独创建一次
   * 如果你非要多个实例共用一个 store，那你可以 const store = new Store(); store: => store;
   */
  store: () => S;
  /**
   * store 数据更新后的 listener，通过它来触发向页面数据的同步，返回值是一个 dispose 函数。
   * 在 mobx 是 autorun、redux 是 subscribe、你要不在意性能，setInterval 也可以
   */
  updateHook: (fn: () => void) => () => void;
  /**
   * store 数据到页面 data 的映射关系
   */
  mapState: M;
};

export type TStoreInitOptions<S> = {
  setData: (o: Record<string, unknown>, callback?: () => void) => void;
  $store?: S;
};

export class StoreBinder<S, M extends TMapState<S>> {
  private disposeStore?: () => void = undefined;
  constructor(private storeOptions: TStoreOptions<S, M>) {}

  /**
   * 绑定和 store 的关系
   */
  init(theThis: TStoreInitOptions<S>) {
    const store = this.storeOptions.store();
    const disposes = Object.keys(this.storeOptions.mapState).map((key) => {
      return this.storeOptions.updateHook(() => {
        theThis.setData({
          [key]: this.storeOptions.mapState[key]({ store }),
        });
      });
    });
    theThis.$store = store;

    this.disposeStore = () => disposes.forEach((d) => d());
  }

  /**
   * 释放和 store 的关系
   */
  dispose() {
    if (this.disposeStore) {
      this.disposeStore();
    }
  }
}

function ComponentImpl<
  Props,
  Data = unknown,
  Methods = unknown,
  Mixins = unknown,
  InstanceMethods = unknown
>({
  props: defaultProps,
  data,
  methods,
  mixins,
  ...instanceMethods
}: {
  props?: Props;
  data?: Data;
  methods?: Methods;
  mixins?: Mixins & any;
} & InstanceMethods) {
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
    data,
    ...instanceMethods,
  });
  /// #endif

  /// #if ALIPAY || BUNDLE2H
  Component({
    props: removeNullProps(mergeDefaultProps(defaultProps)),
    methods,
    mixins: mixins || [],
    data,
    ...instanceMethods,
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

  /// #if ALIPAY || BUNDLE2H
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

  /// #if ALIPAY || BUNDLE2H
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

  /// #if ALIPAY || BUNDLE2H
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
  /// #if ALIPAY || BUNDLE2H
  const props = instance.props;
  if (props[eventName]) {
    props[eventName](fmtEvent(props, e));
  }
  /// #endif

  /// #if WECHAT
  instance.triggerEvent(eventName.toLocaleLowerCase());
  /// #endif
}

export function getValueFromProps(instance: any, propName?: string | string[]) {
  let value;
  /// #if ALIPAY || BUNDLE2H
  const props = instance.props;
  if (!propName) {
    return props;
  }
  if (typeof propName === 'string') {
    value = props[propName];
  }
  if (Array.isArray(propName)) {
    value = propName.map((name) => props[name]);
  }
  /// #endif

  /// #if WECHAT
  const properties = instance.properties;
  if (!propName) {
    return properties;
  }
  if (typeof propName === 'string') {
    value = properties[propName];
  }
  if (Array.isArray(propName)) {
    value = propName.map((name) => properties[name]);
  }
  /// #endif

  return value;
}

export {
  ComponentWithSignalStoreImpl as ComponentWithSignalStore,
  ComponentImpl as Component,
};
