function getFooterConfig(footerConfig = []) {
  if (footerConfig) {
    if (typeof footerConfig.length !== 'undefined') return footerConfig;
    else return [footerConfig];
  }
  return footerConfig;
}

export default {
  getFooterConfig,
};
