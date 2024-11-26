export function defaultFormat(value, options) {
  if (options) {
    return options.map((v) => v.label).join('');
  }
  return '';
}

export function getterColumns(value, options = []) {
  const getColumns = (options, value, columns = []) => {
    columns.push(options.map((v) => ({ value: v.value, label: v.label })));
    const currentOption =
      options.find((v) => v.value === value?.[columns.length - 1]) ||
      options[0];
    if (currentOption?.children?.length > 0) {
      return getColumns(currentOption.children, value, columns);
    }
    return columns;
  };
  return getColumns(options, value);
}

export function getValidValue(value, columns) {
  const result = [];
  for (let i = 0; i < columns.length; i++) {
    if (!columns[i].some((v) => v.value === value?.[i])) {
      result.push(...columns.slice(i).map((v) => v[0]?.value));
      break;
    } else {
      result[i] = value[i];
    }
  }
  return result;
}
