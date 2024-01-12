/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useLayoutEffect.ts
 */

import * as React from 'functional-mini/compat';

/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
const useInternalLayoutEffect = React.useEffect;

const useLayoutEffect = (callback: (mount: boolean) => void, deps?: any) => {
  const firstMountRef = React.useRef(true);

  useInternalLayoutEffect(() => {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(() => {
    firstMountRef.current = false;
    return () => {
      firstMountRef.current = true;
    };
  }, []);
};

export const useComponentUpdateEffect: typeof React.useEffect = (
  callback,
  deps
) => {
  useLayoutEffect((firstMount) => {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};

export default useLayoutEffect;
