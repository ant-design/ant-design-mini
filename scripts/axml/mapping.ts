export const wechatCustomMapping = {
  view: {
    onTouchStart: 'bindtouchstart',
    onTouchMove: 'bindtouchmove',
    onTouchEnd: 'bindtouchend',
    catchTouchStart: 'catchtouchstart',
    catchTouchMove: 'catchtouchmove',
    catchTouchEnd: 'catchtouchend',
    onAnimationEnd: 'bindanimationend',
  },
  'scroll-view': {
    onTouchStart: 'binddragstart',
    onTouchMove: 'binddragging',
    onTouchEnd: 'binddragend',
    onScroll: 'bindscroll',
    onScrollToUpper: 'bindscrolltoupper',
    onScrollToLower: 'bindscrolltolower',
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
  'ant-checkbox-group': {
    onChange: 'bindchange',
  },
  'ant-button': {
    onDisabledTap: 'binddisabledtap',
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
    onAfterShow: 'bindaftershow',
    onAfterClose: 'bindafterclose',
    onClickBack: 'bindclickback',
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
  'ant-uploader': {
    onPreview: 'bindpreview',
  },
  'ant-range-picker': {
    onOk: 'bindok',
  },
  'ant-action-sheet': {
    onAction: 'bindaction',
    onClose: 'bindclose',
  },
  'ant-toast': {
    onClose: 'bindclose',
  },
  'rare-words-keyboard': {
    onClose: 'bindclose',
    onError: 'binderror',
  },
  'ant-rare-words-keyboard': {
    onChange: 'bindchange',
    onClose: 'bindclose',
    onError: 'binderror',
  },
  'ant-modal': {
    onPrimaryButtonTap: 'bindprimarybuttontap',
    onSecondaryButtonTap: 'bindsecondarybuttontap',
    onCancelButtonTap: 'bindcancelbuttontap',
    onClose: 'bindclose',
  },
  'ant-dialog': {
    onClose: 'bindclose',
    onButtonTap: 'bindbuttontap',
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
  'ant-popover': {
    onVisibleChange: 'bindvisiblechange',
    onTapAction: 'bindtapaction',
  },
  'ant-popover-list': {
    onVisibleChange: 'bindvisiblechange',
    onTapItem: 'bindtapitem',
  },
  'ant-feedback': {
    onVisibleChange: 'bindvisiblechange',
    onTapFeedItem: 'bindtapfeeditem',
  },
  'ant-mask': {
    onMaskTap: 'bindmasktap',
  },
  'ant-sticky': {
    onStickyChange: 'bindstickychange',
    onGetHeaderHeight: 'bindgetheaderheight',
  },
  'ant-card': {
    onOperateClick: 'bindoperateclick',
    onFoldChange: 'bindfoldchange',
    onTitleSticky: 'bindtitlesticky',
  },
  'ant-icon': {
    catchTap: 'catchtap',
    onTap: 'bindtap',
  },
  'ant-grid': {
    onTap: 'bindtap',
    onFirstAppear: 'bindfirstappear',
  },
  'ant-countdown': {
    onCountdownChange: 'bindcountdownchange',
    onCountdownFinish: 'bindcountdownfinish',
  },
  'ant-voucher': {
    onBtnTap: 'bindbtntap',
    onVoucherTap: 'bindvouchertap',
  },
  'ant-typography': {
    onTap: 'bindtap',
    catchTap: 'catchtap',
    onDisabledTap: 'binddisabledtap',
  },
  'ant-page-container': {
    onActionTap: 'bindactiontap',
    onSecondaryActionTap: 'bindsecondaryactiontap',
  },
  'ant-footer': {
    onLinkTap: 'bindlinktap',
    onChipTap: 'bindchiptap',
  },
  'ant-terms': {
    onButtonTap: 'bindbuttontap',
    onTermTap: 'bindtermtap',
    onCheckChange: 'bindcheckchange',
    onTermPrefixTap: 'bindtermprefixtap',
    onCountdownFinish: 'bindcountdownfinish',
    onReadChange: 'bindreadchange',
  },
  'ant-number-input': {
    onChange: 'bindchange',
    onLinkTap: 'bindlinktap',
  },
  'ant-postscript': {
    onChange: 'bindchange',
  },
  'ant-select-contact': {
    onSelect: 'bindselect',
  },
  'ant-prompts': {
    onItemTap: 'binditemtap',
  },
  'ant-conversations': {
    onItemTap: 'binditemtap',
    onMenuItemTap: 'bindmenuitemtap',
  },
  'ant-thought-chain': {
    onExpand: 'bindexpand',
    onContentItemTap: 'bindcontentitemtap'
  },
  'ant-empty': {
    onClickButton: 'bindclickbutton',
  },
  'ant-actions': {
    onItemTap: 'binditemtap',
  },
  'ant-bubble': {
    onTypingComplete: 'bindtypingcomplete',
  },
  'ant-sender': {
    onChange: 'bindchange',
    onSubmit: 'bindsubmit',
    onCancel: 'bindcancel',
  },
};
