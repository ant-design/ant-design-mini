function isUrl(string) {
  return !!(string.match('http://') || string.match('https://'));
}

export default { isUrl };
