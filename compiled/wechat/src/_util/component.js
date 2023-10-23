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
import { wechatComponent } from 'functional-mini/component';
function removeNullProps(props) {
    var newProps = {};
    for (var key in props) {
        if (props[key] !== null) {
            newProps[key] = props[key];
        }
    }
    return newProps;
}
export function mountComponent(Hooks, defaultProps) {
    Component(wechatComponent(Hooks, mergeDefaultProps(defaultProps), {
        options: {
            styleIsolation: 'shared',
            multipleSlots: true,
            virtualHost: true,
        },
    }));
}
function mergeDefaultProps(defaultProps) {
    if (defaultProps === void 0) { defaultProps = {}; }
    return __assign({ className: '', style: '' }, defaultProps);
}
