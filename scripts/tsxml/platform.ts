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
    'tsxml-for': 'a:for',
    'tsxml-for-item': 'a:for-item',
    'tsxml-for-index': 'a:for-index',
    'tsxml-for-key': 'a:key',
    'tsxml-if': 'a:if',
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
    'tsxml-for': 'wx:for',
    'tsxml-for-item': 'wx:for-item',
    'tsxml-for-index': 'wx:for-index',
    'tsxml-for-key': 'wx:key',
    'tsxml-if': 'wx:if',
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
      onCancel: 'bind:cancel',
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
    'ant-action-sheet': {
      onAction: 'bind:action',
      onClose: 'bind:close',
    },
    'rare-words-keyboard': {
      onClose: 'bind:close',
      onError: 'bind:error',
    },
    'ant-rare-words-keyboard': {
      onClose: 'bind:close',
      onError: 'bind:error',
    },
    'ant-modal': {
      onPrimaryButtonTap: 'bind:primarybuttontap',
      onSecondaryButtonTap: 'bind:secondarybuttontap',
      onCancelButtonTap: 'bind:cancelbuttontap',
      onClose: 'bind:close',
    },
    'number-keyboard': {
      onClose: 'bind:close',
    },
    'ant-number-keyboard': {
      onClose: 'bind:close',
    },
    'movable-view': {
      onChange: 'bindchange',
      onChangeEnd: 'bindchangeend',
      catchTouchEnd: 'catch:touchend',
      onTouchCancel: 'bind:touchcancel',
      catchTouchStart: 'catch:touchstart',
    },
    'ant-swipe-action': {
      onSwipeEnd: 'bind:swipeend',
      onSwipeStart: 'bind:swipestart',
      onButtonTap: 'bind:buttontap',
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
