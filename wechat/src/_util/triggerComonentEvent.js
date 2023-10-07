export function triggerComponentEvent(instance, propsName, event) {
    instance.triggerEvent(propsName, event.detail);
}
