export function isAilpayNative() {
  // @ts-ignore
  if (typeof ac === 'object') {
    return true;
  }
  return false;
}

export function isSupport(componentName) {
  if (typeof componentName !== 'string') {
    console.error('supportInNative 的入参需要是字符串类型');
    return;
  }
  if (typeof my === 'undefined') {
    // @ts-ignore
    return wx.canIUse(componentName);
  }
  return my.canIUse(componentName);
}

export function assertAilpayNativeNotSupport(componentName) {
  if (isAilpayNative()) {
    console.error(
      `Ant Design Mini 暂不支持在 AlipayNative 环境使用: ${componentName} 组件`
    );
  }
}
