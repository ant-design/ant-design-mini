/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'functional-mini/compat';

export function useEvent<T>(callback: T): T {
  const fnRef = React.useRef<any>();
  fnRef.current = callback;

  const memoFn = React.useCallback<T>(
    ((...args: any) => fnRef.current?.(...args)) as any,
    []
  );

  return memoFn;
}
