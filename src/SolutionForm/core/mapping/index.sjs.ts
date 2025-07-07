function isInternalComponent (widgetName) {
  const internalComponents = [
    'image-upload',
    'input',
    'selector',
    'switch',
    'radio',
    'picker',
    'date-picker',
    'textarea',
  ];
  return internalComponents.indexOf(widgetName) !== -1;
}

function getComponentConfig(item) {
  const _item = item || {}
  const config = item ? ( item.props || {} ) : {};
  if (_item.disabled !== undefined) {
    config.disabled = _item.disabled;
  }
  config.valueType = _item.type;
  return config;
}

function getFormItemValue (formData, path) {
  // 存在group嵌套
  if (path.indexOf('.') > -1) {
    const pathArr = path.split('.');
    if (formData[pathArr[0]]) {
      return formData[pathArr[0]][pathArr[1]];
    }
  }
  return formData[path];
}


export default { isInternalComponent, getComponentConfig, getFormItemValue };
