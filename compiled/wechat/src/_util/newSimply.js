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
export var ComponentWithAnyStoreImpl = function (storeOptions, componentOptions, defaultProps, methods, data, mixins, instanceMethods) {
    // 为了让代码好看点，把 store 的 dispose 存到一个 class 里
    var storeBinder = new StoreBinder(storeOptions);
    var onInitBackup = componentOptions.onInit || (function () { });
    componentOptions.onInit = function () {
        // 先绑定 store 再执行用户的 onInit hooks
        storeBinder.init(this);
        onInitBackup();
    };
    var onDidUnmountBackup = componentOptions.didUnmount || (function () { });
    componentOptions.didUnmount = function () {
        // 先执行用户的 didUnmount hooks 再解绑 store
        onDidUnmountBackup();
        // store dispose
        storeBinder.dispose();
    };
    Component(__assign({ properties: buildProperties(mergeDefaultProps(defaultProps)), options: {
            styleIsolation: 'shared',
            multipleSlots: true,
            virtualHost: true,
        }, methods: methods, behaviors: mixins, data: data }, instanceMethods));
};
var StoreBinder = /** @class */ (function () {
    function StoreBinder(storeOptions) {
        this.storeOptions = storeOptions;
        this.disposeStore = undefined;
    }
    /**
     * 绑定和 store 的关系
     */
    StoreBinder.prototype.init = function (theThis) {
        var _this = this;
        var store = this.storeOptions.store();
        var disposes = Object.keys(this.storeOptions.mapState).map(function (key) {
            return _this.storeOptions.updateHook(function () {
                var _a;
                theThis.setData((_a = {},
                    _a[key] = _this.storeOptions.mapState[key]({ store: store }),
                    _a));
            });
        });
        theThis.$store = store;
        this.disposeStore = function () { return disposes.forEach(function (d) { return d(); }); };
    };
    /**
     * 释放和 store 的关系
     */
    StoreBinder.prototype.dispose = function () {
        if (this.disposeStore) {
            this.disposeStore();
        }
    };
    return StoreBinder;
}());
export { StoreBinder };
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
export function getValueFromProps(instance, propName) {
    var value;
    var properties = instance.properties;
    if (!propName) {
        return properties;
    }
    if (typeof propName === 'string') {
        value = properties[propName];
    }
    if (Array.isArray(propName)) {
        value = propName.map(function (name) { return properties[name]; });
    }
    return value;
}
export { ComponentWithAnyStoreImpl as Component };
