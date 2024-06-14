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
import { PickerDefaultProps } from '../../Picker/props';
import { FormItemDefaultProps } from '../FormItem/props';
export var FormPickerDefaultProps = __assign(__assign(__assign({}, FormItemDefaultProps), PickerDefaultProps), { arrow: false });
