export function supportUndefinedProperty(): boolean {
  let support = true;

  /// #if WECHAT
  support = false;
  /// #endif

  return support;
}
