function getChecked(value, values, multiple) {
  if (!multiple) {
    return value === values;
  }
  return (values || []).indexOf(value) > -1;
}


export default {
  getChecked,
};
