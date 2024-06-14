/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useLayoutEffect.ts
 */
import * as React from 'functional-mini/compat';
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect = React.useEffect;
var useLayoutEffect = function (callback, deps) {
    var firstMountRef = React.useRef(true);
    useInternalLayoutEffect(function () {
        return callback(firstMountRef.current);
    }, deps);
    // We tell react that first mount has passed
    useInternalLayoutEffect(function () {
        firstMountRef.current = false;
        return function () {
            firstMountRef.current = true;
        };
    }, []);
};
export var useComponentUpdateEffect = function (callback, deps) {
    useLayoutEffect(function (firstMount) {
        if (!firstMount) {
            return callback();
        }
    }, deps);
};
export default useLayoutEffect;
