export function defaultFormat(value, options) {
    if (options) {
        return options.map(function (v) { return v.label; }).join('');
    }
    return '';
}
export function getterColumns(value, options) {
    if (options === void 0) { options = []; }
    var getColumns = function (options, value, columns) {
        var _a;
        if (columns === void 0) { columns = []; }
        columns.push(options.map(function (v) { return ({ value: v.value, label: v.label }); }));
        var currentOption = options.find(function (v) { return v.value === (value === null || value === void 0 ? void 0 : value[columns.length - 1]); }) ||
            options[0];
        if (((_a = currentOption === null || currentOption === void 0 ? void 0 : currentOption.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return getColumns(currentOption.children, value, columns);
        }
        return columns;
    };
    return getColumns(options, value);
}
export function getValidValue(value, columns) {
    var result = [];
    var _loop_1 = function (i) {
        if (!columns[i].some(function (v) { return v.value === (value === null || value === void 0 ? void 0 : value[i]); })) {
            result.push.apply(result, columns.slice(i).map(function (v) { var _a; return (_a = v[0]) === null || _a === void 0 ? void 0 : _a.value; }));
            return "break";
        }
        else {
            result[i] = value[i];
        }
    };
    for (var i = 0; i < columns.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return result;
}
