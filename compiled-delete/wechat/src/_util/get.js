export function get(obj, path, defaultValue) {
    // If path is not an array, convert it to an array
    if (!Array.isArray(path)) {
        path = path.split('.').map(function (key) { return key.replace(/\[(\d+)]/g, '$1'); });
    }
    // Use reduce to traverse the path
    var result = path.reduce(function (acc, key) { return (acc && acc[key] !== undefined ? acc[key] : undefined); }, obj);
    return result === undefined ? defaultValue : result;
}
export default get;
