export function getPrecision(value) {
    var valueString = String(value);
    if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
    }
    var p = 0;
    if (valueString.indexOf('.') >= 0) {
        p = valueString.length - valueString.indexOf('.') - 1;
    }
    return p;
}
export function getValidNumber(value, min, max, step, precision) {
    if (min === void 0) { min = -Infinity; }
    if (max === void 0) { max = Infinity; }
    if (typeof value === 'undefined' || value === null) {
        return {
            valid: true,
            value: '',
        };
    }
    var num;
    if (typeof value === 'string') {
        if (/^\s*$/.test(value)) {
            return {
                valid: true,
                value: '',
            };
        }
        if (!isNaN(Number(value))) {
            num = Number(value);
        }
    }
    else {
        num = value;
    }
    if (num > max) {
        num = max;
    }
    else if (num < min) {
        num = min;
    }
    if (typeof num === 'number' && !isNaN(num)) {
        if (typeof precision === 'number' && precision >= 0) {
            return {
                valid: true,
                value: num.toFixed(precision),
            };
        }
        precision = Math.max(getPrecision(num), getPrecision(step));
        return {
            valid: true,
            value: num.toFixed(precision),
        };
    }
    return {
        valid: false,
    };
}
