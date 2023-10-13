import { alipayComponent, wechatComponent } from 'functional-mini/component';

function removeNullProps(props) {
  const newProps = {};
  for (const key in props) {
    if (props[key] !== null) {
      newProps[key] = props[key];
    }
  }
  return newProps;
}

export function mountComponent<T>(
  Hooks: (props: T) => unknown,
  defaultProps: T
) {
  /// #if WECHAT
  Component(wechatComponent(Hooks, defaultProps, { styleIsolation: 'shared' }));
  /// #endif

  /// #if ALIPAY
  Component(alipayComponent(Hooks, removeNullProps(defaultProps)));
  /// #endif
}
