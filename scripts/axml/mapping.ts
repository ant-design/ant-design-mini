export const wechatCustomMapping = {
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
  'ant-button': {
    onDisabledTap: 'bind:disabledtap',
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
    onAfterShow: 'bind:aftershow',
    onAfterClose: 'bind:afterclose',
    onClickBack: 'bind:clickback',
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
  'ant-uploader': {
    onPreview: 'bind:preview',
  },
  'ant-range-picker': {
    onOk: 'bind:ok',
  },
  'ant-action-sheet': {
    onAction: 'bind:action',
    onClose: 'bind:close',
  },
  'ant-toast': {
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
};
