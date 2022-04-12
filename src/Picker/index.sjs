function getPickerViewLabel(item) {
  if(typeof item === 'object' && typeof item.label === 'string') return  item.label  || ''
  return item
}

function getSelectedIndex(columns, cValue) {
  const selectedIndex = [];
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    let compareValue  =  cValue[i]
    if (compareValue  === undefined) {
      selectedIndex[i] = 0
      break;
    }
    let index  = column.findIndex(c => {
      return c === compareValue || c.value === compareValue
    })
    if (index === -1) { index  = 0 }
    selectedIndex[i]  = index
  }
  return selectedIndex
}

export default {
  getPickerViewLabel,
  getSelectedIndex
}
