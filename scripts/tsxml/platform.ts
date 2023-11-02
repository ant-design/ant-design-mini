export const alipay: PlatformConfig = {
  if: 'a:if',
  for: 'a:for',
  forItem: 'a:for-item',
  forIndex: 'a:for-index',
  forKey: 'a:key',
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
  forKey: 'wx:key',
  xmlScript: {
    name: 'module',
    from: 'src',
    tagName: 'wxs',
    ext: 'wxs',
  },
  basicEvent: {
    onMaskTap: 'bind:masktap',
    onTap: 'bind:tap',
    catchTap: 'catch:tap',
    onChange: 'bind:change',
    onScroll: 'bind:scroll',
  },
};

export interface PlatformConfig {
  for: string;
  if: string;
  else: string;
  forItem: string;
  forIndex: string;
  forKey: string;
  xmlScript: {
    from: string;
    name: string;
    tagName: string;
    ext: string;
  };
  basicEvent: {
    onMaskTap?: string;
    onTap: string;
    catchTap: string;
    onChange?: string;
    onScroll?: string;
  };
}
