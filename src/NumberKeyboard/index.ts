import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';

import { NumberKeyboardDefaultProps } from './props';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Component({
  props: NumberKeyboardDefaultProps,
  data: {
    numArr: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    randomArr: [],
  },
  methods: {
    catchAppearModal() {
      this.setRandom();
    },
    setRandom() {
      if (getValueFromProps(this, 'random')) {
        const newArr = arr.sort(function () {
          return Math.random() - 0.5;
        });
        this.setData({
          randomArr: [
            newArr.slice(0, 3),
            newArr.slice(3, 6),
            newArr.slice(6, 9),
          ],
        });
      }
    },
    tapButton(e) {
      const [value, confirmDisabled] = getValueFromProps(this, [
        'value',
        'confirmDisabled',
      ]);
      this.vibrate();
      const _key = e.currentTarget.dataset.key;
      const _val = `${value}`;

      // 回退
      if (_key === 'del') {
        triggerEvent(this, 'change', `${_val.substr(0, _val.length - 1)}`, e);
        return;
      }
      if (_key !== 'del' && _key !== 'enter') {
        triggerEvent(this, 'change', `${_val}${_key}`, e);
      }
      if (_key === 'enter' && !confirmDisabled) {
        this.onClickEnter();
        triggerEventOnly(this, 'close');
      }
    },
    // 隐藏键盘，失去焦点
    handleHide() {
      triggerEventOnly(this, 'close');
    },
    onClickEnter() {
      const confirmDisabled = getValueFromProps(this, 'confirmDisabled');
      if (confirmDisabled) return;
      this.handleHide();
      triggerEventOnly(this, 'confirm');
    },
    // 振动反馈
    vibrate() {
      if (getValueFromProps(this, 'vibrate') && typeof my !== 'undefined') {
        my.canIUse('vibrateShort') && my.vibrateShort();
      }
    },
  },

  /// #if ALIPAY || BUNDLE2H
  didMount() {
    this.setRandom();
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.setRandom();
  },
  /// #endif
});
