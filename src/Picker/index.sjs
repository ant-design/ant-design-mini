function getPickerViewLabel(item) {
  if(typeof item === 'object' && item.label) return  item.label
  return item
}

function getSelectedIndex(columns, cValue) {
  const selected = [];
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i]
    let j;
    for (j = 0; j < column.length; j++) {
      if (column[j] ===  cValue[i]){
        selected[i] = j;
        break;
      }
    }
    if (j === column.length){
      selected[i] = -1
    }
  }
  return selected
}

export default {
  getPickerViewLabel,
  getSelectedIndex
}
