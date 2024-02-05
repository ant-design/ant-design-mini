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
  return newProperties;
}

function mergeDefaultProps(defaultProps: Record<string, any> = {}) {
  return {
    ...defaultProps,
  };
}

function ComponentImpl<T>(defaultProps: T) {

  Component({
    props: removeNullProps(mergeDefaultProps(defaultProps))
  });
}

export {
  ComponentImpl as Component
}