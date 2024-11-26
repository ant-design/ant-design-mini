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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { platform } from '../_util/platform';
export function transformOptions(original) {
    if (platform() === 'wechat') {
        var props = original.props, didMount_1 = original.didMount, didUpdate = original.didUpdate, rest = __rest(original, ["props", "didMount", "didUpdate"]);
        return __assign(__assign({}, rest), { properties: transformProperties(props), lifetimes: {
                attached: function () {
                    return didMount_1.call(this);
                },
            }, options: {
                multipleSlots: true,
                styleIsolation: 'shared',
            }, observers: {
                'damping, swiped': function () {
                    this.setData({
                        swipeX: 0,
                        swipedR: false,
                        swipedL: false,
                        tapTypeL: '',
                        tapTypeR: '',
                    });
                },
                'elasticity': function (elasticity) {
                    this.setData({
                        swipeX: 0,
                        swipedR: false,
                        swipedL: false,
                        tapTypeL: '',
                        tapTypeR: '',
                    });
                    this.setData({ inertiaWidth: elasticity ? 20 : 0 });
                },
            } });
    }
    return __assign({}, original);
}
export function transformProperties(props) {
    var properties = {};
    Object.keys(props).forEach(function (key) {
        properties[key] = {
            type: null,
            value: props[key],
        };
    });
    return properties;
}
