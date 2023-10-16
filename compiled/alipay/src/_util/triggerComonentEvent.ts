export function triggerComponentEvent(instance, propsName, event) {

  if (instance.props[propsName]) {
    instance.props[propsName](event);
  }
}
