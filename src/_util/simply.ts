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
    if (props[key] !== null) {
      let type = null;
      switch(typeof props[key]) {
        case 'string':
          type = String;
          break;
        case 'number':
          type = Number;
          break;
        case 'boolean':
          type = Number;
          break;
      }
      newProperties[key] = {
        type,
        value: props[key]
      };
    }
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

function ComponentImpl<T>(defaultProps: T) {
  /// #if WECHAT
  Component({
    properties: buildProperties(mergeDefaultProps(defaultProps)),
    options: {
      styleIsolation: 'shared',
      multipleSlots: true,
      virtualHost: true,
    } as any,
  });
  /// #endif

  /// #if ALIPAY
  Component({
    props: removeNullProps(mergeDefaultProps(defaultProps))
  });
  /// #endif
}

export {
  ComponentImpl as Component
}