export function flattenObject(obj, parentKey = '', result = {}) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      if (Object.prototype.toString.call(value) === '[object Object]') {
        flattenObject(value, currentKey, result);
      } else {
        result[currentKey] = value;
      }
    }
  }
  return result;
}

export default flattenObject;
