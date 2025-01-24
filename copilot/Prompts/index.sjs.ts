function isUrl(string) {
  if (!string) return;
  return !!(
    string.indexOf('http://') === 0 || string.indexOf('https://') === 0
  );
}

export default {
  isUrl,
};
