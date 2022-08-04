export const FilterItemDefaultProps = {
  type: 'default',
  onFormat(selected) {
    if (selected && !Array.isArray(selected)) {
      return selected.text;
    }
    return '';
  },
};
