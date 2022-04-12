
function getColumnValue(columnItem)  {
  if (typeof columnItem === 'object') return columnItem.value;
  return columnItem
}

export function getMatchedValuesByValue(columns, value) {
  const matchedValues = []
  const matchedColumn = []
  let index = null;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = value[i]
    if (compareValue === undefined) {
      index = 0;
    } else {
      index  = column.findIndex(c => {
        return c === compareValue || c.value === compareValue
      })
      if (index === -1) { index  = 0 } // 没有找到， 默认选择第一个
    }
    matchedColumn[i]  = column[index]
    matchedValues[i] = getColumnValue(column[index])
  }
  return { 
    matchedColumn,
    matchedValues
  }
}

export function getMatchedValuesByIndex(columns, selectedIndex) {
  const matchedValues = []
  const matchedColumn = []
  let index = null;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const compareValue = selectedIndex[i]
    index = null;
    if (compareValue === undefined) {
      index = 0;
    } else {
      index = compareValue;
      if (index === -1) { index  = 0 } // 没有找到， 默认选择第一个
    }
    matchedColumn[i] = column[index]
    matchedValues[i] = getColumnValue(column[index])
  }
 
  return { 
    matchedColumn,
    matchedValues
  }
}

