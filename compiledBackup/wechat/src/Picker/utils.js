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
        var compareValue = (value || [])[i];
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
export function getMatchedItemByValue(columns, value, single) {
    if (single) {
        value = [value];
    }
    var matchedValues = [];
    var matchedColumn = [];
    var index = null;
    var _loop_2 = function (i) {
        var column = columns[i];
        var compareValue = (value || [])[i];
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
        matchedColumn: single ? matchedColumn[0] : matchedColumn,
        matchedValues: single ? matchedValues[0] : matchedValues,
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
        matchedColumn: single ? matchedColumn[0] : matchedColumn,
        matchedValues: single ? matchedValues[0] : matchedValues,
    };
}
