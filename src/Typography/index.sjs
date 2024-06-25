function isUrl(string) {
  return !!(string.match('http://') || string.match('https://'));
}

const typeConfig = {
  copy: {
    icon: 'TextOutline',
  },
  delete: {
    icon: 'DeleteOutline',
  },
  edit: {
    icon: 'EditSOutline',
  },
  link: {
    icon: 'RightOutline',
  },
};

export default { isUrl, typeConfig };
