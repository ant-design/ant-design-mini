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
    ref: 'bindref',
    onVisibleChange: 'bindvisiblechange',
    onMaskTap: 'bindmasktap',
    onTap: 'bindtap',
    catchTap: 'catchtap',
    onChange: 'bindchange',
    onScroll: 'bindscroll',
    'tsxml-for': 'wx:for',
    'tsxml-for-item': 'wx:for-item',
    'tsxml-for-index': 'wx:for-index',
    'tsxml-for-key': 'wx:key',
    'tsxml-if': 'wx:if',
  },
  props: {
    view: {
      onTouchStart: 'bindtouchstart',
      onTouchMove: 'bindtouchmove',
      onTouchEnd: 'bindtouchend',
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
      onChange: 'bindchange',
    },
    'ant-slider': {
      onAfterChange: 'bindafterchange',
    },
    'ant-input': {
      onBlur: 'bindblur',
      onConfirm: 'bindconfirm',
      onFocus: 'bindfocus',
      onChange: 'bindchange',
    },
    'ant-popup': {
      onClose: 'bindclose',
    },
    'ant-picker': {
      onOk: 'bindok',
      onCancel: 'bindcancel',
    },
    'ant-cascader-picker': {
      onOk: 'bindok',
      onCancel: 'bindcancel',
    },
    'ant-date-picker': {
      onCancel: 'bindcancel',
      onOk: 'bindok',
      onPickerChange: 'bindpickerchange',
    },
    'ant-selector': {
      onSelectMin: 'bindselectmin',
      onSelectMax: 'bindselectmax',
    },
    'ant-guide-tour': {
      onCancel: 'bindcancel',
    },
    uploader: {
      onPreview: 'bindpreview',
    },
    'ant-range-picker': {
      onOk: 'bindok',
    },
    'ant-action-sheet': {
      onAction: 'bindaction',
      onClose: 'bindclose',
    },
    'rare-words-keyboard': {
      onClose: 'bindclose',
      onError: 'binderror',
    },
    'ant-rare-words-keyboard': {
      onClose: 'bindclose',
      onError: 'binderror',
    },
    'ant-modal': {
      onPrimaryButtonTap: 'bindprimarybuttontap',
      onSecondaryButtonTap: 'bindsecondarybuttontap',
      onCancelButtonTap: 'bindcancelbuttontap',
      onClose: 'bindclose',
    },
    'number-keyboard': {
      onClose: 'bindclose',
    },
    'ant-number-keyboard': {
      onClose: 'bindclose',
    },
    'movable-view': {
      onChange: 'bindchange',
      onChangeEnd: 'bindchangeend',
      catchTouchEnd: 'catchtouchend',
      onTouchCancel: 'bindtouchcancel',
      catchTouchStart: 'catchtouchstart',
    },
    'ant-swipe-action': {
      onSwipeEnd: 'bindswipeend',
      onSwipeStart: 'bindswipestart',
      onButtonTap: 'bindbuttontap',
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
