export const alipay: PlatformConfig = {
  if: 'a:if',
  for: 'a:for',
  forItem: 'a:for-item',
  forIndex: 'a:for-index',
  else: 'a:else',
  xmlScript: {
    from: 'from',
    name: 'name',
    tagName: 'import-sjs',
    ext: 'sjs',
  },
  basicEvent: {
    onTap: 'onTap',
    catchTap: 'catchTap',
  },
};

export const wechat: PlatformConfig = {
  if: 'wx:if',
  for: 'wx:for',
  else: 'wx:else',
  forItem: 'wx:for-item',
  forIndex: 'wx:for-index',
  xmlScript: {
    name: 'module',
    from: 'src',
    tagName: 'wxs',
    ext: 'wxs',
  },
  basicEvent: {
    onTap: 'bindtap',
    catchTap: 'catchtap',
  },
};

export interface PlatformConfig {
  for: string;
  if: string;
  else: string;
  forItem: string;
  forIndex: string;
  xmlScript: {
    from: string;
    name: string;
    tagName: string;
    ext: string;
  };
  basicEvent: {
    onTap: string;
    catchTap: string;
  };
}
