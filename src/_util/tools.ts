export function objectValues(obj: { [s: string]: unknown } | ArrayLike<unknown>): unknown[] {
  if (obj !== Object(obj)) throw new TypeError('Object.values called on a non-object');
  const val = [];
  let key;
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      val.push(obj[key]);
    }
  }
  return val;
}

export function objectEntries<T>(obj: { [s: string]: T } | ArrayLike<T>): [string, T][] {
  const ownProps = Object.keys(obj);
  let i = ownProps.length;
  const resArray = new Array(i);
  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }
  return resArray;
}
