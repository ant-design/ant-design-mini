var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function removeNullProps(props) {
    var newProps = {};
    for (var key in props) {
        if (props[key] !== null) {
            newProps[key] = props[key];
        }
    }
    return newProps;
}
function buildProperties(props) {
    var newProperties = {};
    for (var key in props) {
        var type = null;
        switch (typeof props[key]) {
            case 'string':
                type = String;
                break;
            case 'number':
                type = Number;
                break;
            case 'boolean':
                type = Boolean;
                break;
        }
        newProperties[key] = {
            type: type,
            value: props[key],
        };
    }
    return newProperties;
}
function mergeDefaultProps(defaultProps) {
    if (defaultProps === void 0) { defaultProps = {}; }
    return __assign({ className: '', style: '' }, defaultProps);
}
function ComponentImpl(defaultProps, methods) {
    Component({
        properties: buildProperties(mergeDefaultProps(defaultProps)),
        options: {
            styleIsolation: 'shared',
            multipleSlots: true,
            virtualHost: true,
        },
        methods: methods,
    });
}
export function triggerEvent(instance, eventName, value, e) {
    // 首字母大写，然后加上 on
    instance.triggerEvent(eventName.toLocaleLowerCase(), value);
}
export function triggerEventOnly(instance, eventName, e) {
    // 首字母大写，然后加上 on
    instance.triggerEvent(eventName.toLocaleLowerCase());
}
export function triggerEventValues(instance, eventName, values, e) {
    // 首字母大写，然后加上 on
    instance.triggerEvent(eventName.toLocaleLowerCase(), values);
}
export function triggerCatchEvent(instance, eventName, e) {
    instance.triggerEvent(eventName.toLocaleLowerCase());
}
export { ComponentImpl as Component };
