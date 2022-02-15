const hasOwn = {}.hasOwnProperty;

/* eslint-disable no-continue, prefer-spread */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function fmtClass(...args: any[]): string {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = fmtClass.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
