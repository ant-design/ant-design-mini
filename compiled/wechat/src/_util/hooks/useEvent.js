/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useEvent.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'functional-mini/compat';
export function useEvent(callback) {
    const fnRef = React.useRef();
    fnRef.current = callback;
    const memoFn = React.useCallback(((...args) => fnRef.current?.(...args)), []);
    return memoFn;
}
