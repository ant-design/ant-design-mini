function getTitle(options, value) {
  const obj = options.find((item) => item.value === value);
  if (obj) {
    return obj.title;
  }
}

export default { getTitle };
