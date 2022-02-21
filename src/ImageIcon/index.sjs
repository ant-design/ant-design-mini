const image = img => {
  let url = '';
  let icon = '';
  const reg = getRegExp('^http');
  if (typeof img === 'string' && img !== '') {
    if (img.match(reg)) {
      url = img;
    } else {
      icon = img;
    }
    return { url, icon };
  }
}

export default { image };
