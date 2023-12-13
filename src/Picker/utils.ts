import { PickerValue } from './props';

function getColumnValue(columnItem) {
  if (typeof columnItem === 'object') return columnItem.value;
  return columnItem;
}

export function getStrictMatchedItemByValue(columns, value, single) {
  if (single) {
    value = [value];
  }
  const matchedValues = [];
  const matchedColumn = [];
  let index = null;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = value[i];
    index = column.findIndex((c) => {
      const columnValue = getColumnValue(c);
      return columnValue === compareValue;
    });
    matchedColumn[i] = column[index];
    matchedValues[i] = getColumnValue(column[index]);
  }
  return {
    matchedColumn: single ? matchedColumn?.[0] : matchedColumn,
    matchedValues: single ? matchedValues?.[0] : matchedValues,
  };
}

// 如果找不到value对应的item项目，返回第一项
export function getMatchedItemByValue(columns, value, singleRef) {
  if (singleRef.current) {
    value = [value];
  }
  const matchedValues = [];
  const matchedColumn = [];
  let index = null;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = value[i];
    if (compareValue === undefined || compareValue === null) {
      index = 0;
    } else {
      index = column.findIndex((c) => {
        const columnValue = getColumnValue(c);
        return columnValue === compareValue;
      });
      if (index === -1) {
        index = 0;
      } // 没有找到， 默认选择第一个
    }
    matchedColumn[i] = column[index];
    matchedValues[i] = getColumnValue(column[index]);
  }
  return {
    matchedColumn: singleRef.current ? matchedColumn[0] : matchedColumn,
    matchedValues: singleRef.current ? matchedValues[0] : matchedValues,
  };
}

export function getMatchedItemByIndex(columns, selectedIndex, single) {
  const matchedValues = [];
  const matchedColumn = [];
  let index = null;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = selectedIndex[i];
    index = null;
    if (compareValue === undefined || compareValue === null) {
      index = 0;
    } else {
      index = compareValue;
      // 当column变化时， picker-view onChange 里抛出来的selectedIndex有可能不正确
      if (columns?.[i]?.[compareValue] === undefined) {
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

export function getterColumns(options: PickerValue[], singleRef) {
  let columns = [];
  if (options.length > 0) {
    if (options.every((item) => Array.isArray(item))) {
      singleRef.current = false;
      columns = options.slice();
    } else {
      singleRef.current = true;
      columns = [options];
    }
  }
  return columns;
}

export function defaultFormat(value, column) {
  if (Array.isArray(column)) {
    return column
      .filter((c) => c !== undefined)
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
  const { matchedColumn } = getStrictMatchedItemByValue(
    columns,
    realValue,
    singleRef.current
  );

  if (typeof onFormat === 'function') {
    const formatValueByProps = onFormat(realValue, matchedColumn);
    if (formatValueByProps !== undefined) {
      return formatValueByProps;
    }
  }
  return defaultFormat(realValue, matchedColumn);
}

export function getterSelectedIndex(columns, realValue, sinefileRef) {
  const selectedIndex = [];
  let value = realValue;
  if (sinefileRef.current) {
    value = [realValue];
  }
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = value[i];
    if (compareValue === undefined || compareValue === null) {
      selectedIndex[i] = 0;
    }
    let index = column.findIndex((c) => {
      return c === compareValue || c.value === compareValue;
    });
    if (index === -1) {
      index = 0;
    }
    selectedIndex[i] = index;
  }
  return selectedIndex;
}
