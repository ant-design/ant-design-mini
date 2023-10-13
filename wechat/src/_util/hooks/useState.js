/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useState.ts
 */
import * as React from 'functional-mini/compat';
/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
export function useSafeState(defaultValue) {
    const destroyRef = React.useRef(false);
    const [value, setValue] = React.useState(defaultValue);
    React.useEffect(() => {
        destroyRef.current = false;
        return () => {
            destroyRef.current = true;
        };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
            return;
        }
        setValue(updater);
    }
    return [value, safeSetState];
}
