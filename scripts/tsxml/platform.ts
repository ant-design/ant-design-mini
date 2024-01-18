export const alipay: PlatformConfig = {
  if: 'a:if',
  for: 'a:for',
  elseif: 'a:elif',
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
  elseif: 'wx:elif',
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
    ref: 'bind:ref',
    onVisibleChange: 'bind:visiblechange',
    onMaskTap: 'bind:masktap',
    onTap: 'bind:tap',
    catchTap: 'catch:tap',
    onChange: 'bind:change',
    onScroll: 'bind:scroll',
  },
  props: {
    view: {
      onTouchStart: 'bind:touchstart',
      onTouchMove: 'bind:touchmove',
      onTouchEnd: 'bind:touchend',
      onAnimationEnd: 'bindanimationend',
    },
    input: {
      onInput: 'bindinput',
      onConfirm: 'bindconfirm',
      onFocus: 'bindfocus',
      onBlur: 'bindblur',
      onKeyboardHeightChange: 'bindkeyboardheightchange',
      onNicknameReview: 'bindnicknamereview',
    },
    textarea: {
      onInput: 'bindinput',
      onConfirm: 'bindconfirm',
      onFocus: 'bindfocus',
      onBlur: 'bindblur',
    },
    'checkbox-group': {
      onChange: 'bindchange',
    },
    'ant-textarea': {
      onChange: 'bind:change',
    },
    'ant-slider': {
      onAfterChange: 'bind:afterchange',
    },
    'ant-input': {
      onBlur: 'bind:blur',
      onConfirm: 'bind:confirm',
      onFocus: 'bind:focus',
      onChange: 'bind:change',
    },
    'ant-popup': {
      onClose: 'bind:close',
    },
    'ant-picker': {
      onOk: 'bind:ok',
      onCancel: 'bind:cancel',
    },
    'ant-cascader-picker': {
      onOk: 'bind:ok',
      onCancel: 'bind:cancel',
    },
    'ant-date-picker': {
      onOk: 'bind:ok',
      onPickerChange: 'bind:pickerchange',
    },
    'ant-selector': {
      onSelectMin: 'bind:selectmin',
      onSelectMax: 'bind:selectmax',
    },
    'ant-guide-tour': {
      onCancel: 'bind:cancel',
    },
    uploader: {
      onPreview: 'bind:preview',
    },
    'ant-range-picker': {
      onOk: 'bind:ok',
    },
  },
};

export interface PlatformConfig {
  for: string;
  if: string;
  else: string;
  elseif: string;
  forItem: string;
  forIndex: string;
  forKey: string;
  xmlScript: {
    from: string;
    name: string;
    tagName: string;
    ext: string;
  };
  basicEvent: Record<string, string>;
  props?: {
    [key: string]: Record<string, string>;
  };
}
