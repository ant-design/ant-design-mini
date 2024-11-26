export function set(obj, path, value) {
    // If path is not an array, convert it to an array
    if (!Array.isArray(path)) {
        path = path.split('.').reduce(function (acc, key) {
            key.split(/\[([^}]+)\]/g).forEach(function (k) {
                if (k !== '')
                    acc.push(isNaN(k) ? k : Number(k));
            });
            return acc;
        }, []);
    }
    // Traverse the object according to the path
    path.slice(0, -1).reduce(function (acc, key, index) {
        if (acc[key] === undefined) {
            acc[key] = typeof path[index + 1] === 'number' ? [] : {};
        }
        return acc[key];
    }, obj)[path[path.length - 1]] = value;
    return obj;
}
export default set;
