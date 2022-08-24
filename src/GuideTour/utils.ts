const buttonGroupKeys = [
  'nextButtonVisible',
  'lastButtonVisible',
  'jumpButtonVisible',
  'knowButtonVisible',
];

export const changeButtonVisible = (v: string[]) => {
  const newData = {};
  buttonGroupKeys.forEach((key) => {
    if (v.indexOf(key) !== -1) {
      newData[key] = true;
    } else {
      newData[key] = false;
    }
  });
  return newData;
};
