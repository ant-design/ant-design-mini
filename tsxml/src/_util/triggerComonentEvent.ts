export function triggerComponentEvent(instance, propsName, event) {
  /// #if WECHAT
  instance.triggerEvent(propsName, event.detail);
  /// #endif

  /// #if ALIPAY
  if (instance.props[propsName]) {
    instance.props[propsName](event);
  }
  /// #endif
}
