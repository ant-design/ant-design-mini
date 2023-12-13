function getColumnValue(columnItem) {
    if (typeof columnItem === 'object')
        return columnItem.value;
    return columnItem;
}
export function getStrictMatchedItemByValue(columns, value, single) {
    if (single) {
        value = [value];
    }
    var matchedValues = [];
    var matchedColumn = [];
    var index = null;
    var _loop_1 = function (i) {
        var column = columns[i];
        var compareValue = value[i];
        index = column.findIndex(function (c) {
            var columnValue = getColumnValue(c);
            return columnValue === compareValue;
        });
        matchedColumn[i] = column[index];
        matchedValues[i] = getColumnValue(column[index]);
    };
    for (var i = 0; i < columns.length; i++) {
        _loop_1(i);
    }
    return {
        matchedColumn: single ? matchedColumn === null || matchedColumn === void 0 ? void 0 : matchedColumn[0] : matchedColumn,
        matchedValues: single ? matchedValues === null || matchedValues === void 0 ? void 0 : matchedValues[0] : matchedValues,
    };
}
// 如果找不到value对应的item项目，返回第一项
export function getMatchedItemByValue(columns, value, singleRef) {
    if (singleRef.current) {
        value = [value];
    }
    var matchedValues = [];
    var matchedColumn = [];
    var index = null;
    var _loop_2 = function (i) {
        var column = columns[i];
        var compareValue = value[i];
        if (compareValue === undefined || compareValue === null) {
            index = 0;
        }
        else {
            index = column.findIndex(function (c) {
                var columnValue = getColumnValue(c);
                return columnValue === compareValue;
            });
            if (index === -1) {
                index = 0;
            } // 没有找到， 默认选择第一个
        }
        matchedColumn[i] = column[index];
        matchedValues[i] = getColumnValue(column[index]);
    };
    for (var i = 0; i < columns.length; i++) {
        _loop_2(i);
    }
    return {
        matchedColumn: singleRef.current ? matchedColumn[0] : matchedColumn,
        matchedValues: singleRef.current ? matchedValues[0] : matchedValues,
    };
}
export function getMatchedItemByIndex(columns, selectedIndex, single) {
    var _a;
    var matchedValues = [];
    var matchedColumn = [];
    var index = null;
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var compareValue = selectedIndex[i];
        index = null;
        if (compareValue === undefined || compareValue === null) {
            index = 0;
        }
        else {
            index = compareValue;
            // 当column变化时， picker-view onChange 里抛出来的selectedIndex有可能不正确
            if (((_a = columns === null || columns === void 0 ? void 0 : columns[i]) === null || _a === void 0 ? void 0 : _a[compareValue]) === undefined) {
                index = 0;
            }
            if (index === -1) {
                index = 0;
            } // 没有找到， 默认选择第一个
        }
        matchedColumn[i] = column[index];
        matchedValues[i] = getColumnValue(column[index]);
    }
    return {
        matchedColumn: single.current ? matchedColumn[0] : matchedColumn,
        matchedValues: single.current ? matchedValues[0] : matchedValues,
    };
}
export function getterColumns(options, singleRef) {
    var columns = [];
    if (options.length > 0) {
        if (options.every(function (item) { return Array.isArray(item); })) {
            singleRef.current = false;
            columns = options.slice();
        }
        else {
            singleRef.current = true;
            columns = [options];
        }
    }
    return columns;
}
export function defaultFormat(value, column) {
    if (Array.isArray(column)) {
        return column
            .filter(function (c) { return c !== undefined; })
            .map(function (c) {
            if (typeof c === 'object') {
                return c.label;
            }
            return c;
        })
            .join('-');
    }
    return (column && column.label) || column || '';
}
export function getterFormatText(columns, realValue, onFormat, singleRef) {
    var matchedColumn = getStrictMatchedItemByValue(columns, realValue, singleRef.current).matchedColumn;
    if (typeof onFormat === 'function') {
        var formatValueByProps = onFormat(realValue, matchedColumn);
        if (formatValueByProps !== undefined) {
            return formatValueByProps;
        }
    }
    return defaultFormat(realValue, matchedColumn);
}
export function getterSelectedIndex(columns, realValue, sinefileRef) {
    var selectedIndex = [];
    var value = realValue;
    if (sinefileRef.current) {
        value = [realValue];
    }
    var _loop_3 = function (i) {
        var column = columns[i];
        var compareValue = value[i];
        if (compareValue === undefined || compareValue === null) {
            selectedIndex[i] = 0;
        }
        var index = column.findIndex(function (c) {
            return c === compareValue || c.value === compareValue;
        });
        if (index === -1) {
            index = 0;
        }
        selectedIndex[i] = index;
    };
    for (var i = 0; i < columns.length; i++) {
        _loop_3(i);
    }
    return selectedIndex;
}
