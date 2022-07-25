const buttonGroupKeys = [
  'nextButtonVisible',
  'lastButtonVisible',
  'jumpButtonVisible',
  'konwButtonVisible',
];

export const changeButtonVisible = (v: string[]) => {
  const newData = {};
  buttonGroupKeys.forEach((key) => {
    if (v.includes(key)) {
      newData[key] = true;
    } else {
      newData[key] = false;
    }
  });
  return newData;
};
