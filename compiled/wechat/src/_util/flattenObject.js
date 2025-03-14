export function flattenObject(obj, parentKey, result) {
    if (parentKey === void 0) { parentKey = ''; }
    if (result === void 0) { result = {}; }
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var currentKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
            var value = obj[key];
            if (Object.prototype.toString.call(value) === '[object Object]') {
                flattenObject(value, currentKey, result);
            }
            else {
                result[currentKey] = value;
            }
        }
    }
    return result;
}
export default flattenObject;
