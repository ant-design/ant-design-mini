export function supportUndefinedProperty(): boolean {
  let support = true;

  /// #if WECHAT
  support = false;
  /// #endif

  return support;
}

export function platform() {
  let platform = 'unknown';

  /// #if WECHAT
  platform = 'wechat';
  /// #endif

  /// #if ALIPAY
  platform = 'alipay';
  /// #endif

  return platform;
}
