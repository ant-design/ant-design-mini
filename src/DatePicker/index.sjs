function getPickerValue(columns, value) {
  if (columns.length === 0) return [];
  if (value && value.length) return value;

  // eslint-disable-next-line no-undef
  const now = getDate();
  const fields = [
    'getFullYear',
    'getMonth',
    'getDate',
    'getHours',
    'getMinutes',
    'getSeconds',
  ];
  const nowValue = [];
  for (let i = 0; i < columns.length; i++) {
    nowValue.push(now[fields[i]]());
    if (i === 1) {
      nowValue[1] = nowValue[1] + 1;
    }
  }
  const isNowValueValid = nowValue.every((v, i) => columns[i].indexOf(v) > -1);
  return isNowValueValid ? nowValue : columns.map((v) => v[0]);
}
export default {
  getPickerValue,
};
