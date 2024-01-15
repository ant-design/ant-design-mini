var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useEvent.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'functional-mini/compat';
// eslint-disable-next-line @typescript-eslint/ban-types
export function useEvent(callback) {
    var fnRef = React.useRef();
    fnRef.current = callback;
    var memoFn = React.useCallback((function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = fnRef.current) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([fnRef], args, false));
    }), []);
    return memoFn;
}
