/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useEvent.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'functional-mini/compat';

// eslint-disable-next-line @typescript-eslint/ban-types
export function useEvent<T extends Function>(callback: T): T {
  const fnRef = React.useRef<any>();
  fnRef.current = callback;

  const memoFn = React.useCallback<T>(
    ((...args: any) => fnRef.current?.(...args)) as any,
    []
  );

  return memoFn;
}
