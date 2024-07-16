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
    const compareValue = (value || [])[i];
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
export function getMatchedItemByValue(columns, value, single) {
  if (single) {
    value = [value];
  }
  const matchedValues = [];
  const matchedColumn = [];
  let index = null;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = (value || [])[i];
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
    matchedColumn: single ? matchedColumn[0] : matchedColumn,
    matchedValues: single ? matchedValues[0] : matchedValues,
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
    matchedColumn: single ? matchedColumn[0] : matchedColumn,
    matchedValues: single ? matchedValues[0] : matchedValues,
  };
}
