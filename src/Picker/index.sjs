function getPickerViewLabel(item) {
  if (typeof item === 'object' && typeof item.label === 'string') return  item.label  || ''
  return item
}

export default {
  getPickerViewLabel,
}
